import { createClient } from 'npm:@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

async function sendEmailNotification(data: JobApplication, cvUrl: string) {
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  const notificationEmail = Deno.env.get('NOTIFICATION_EMAIL');

  if (!resendApiKey || !notificationEmail) {
    console.warn('Email notifications not configured. Skipping email.');
    return;
  }

  try {
    const emailBody = `
New Job Application Received

Position: ${data.jobTitle}
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
${data.linkedin ? `LinkedIn: ${data.linkedin}` : ''}

CV: ${cvUrl}

${data.coverLetter ? `Cover Letter:\n${data.coverLetter}` : 'No cover letter provided'}
    `.trim();

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Careers <onboarding@resend.dev>',
        to: [notificationEmail],
        subject: `New Job Application: ${data.jobTitle} - ${data.fullName}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Failed to send email:', error);
    }
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

interface JobApplication {
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  linkedin?: string;
  coverLetter?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        {
          status: 405,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const formData = await req.formData();

    const file = formData.get('file') as File;
    const fileName = formData.get('fileName') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const linkedin = formData.get('linkedin') as string;
    const coverLetter = formData.get('coverLetter') as string;

    if (!file || !fileName || !jobTitle || !fullName || !email || !phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const fileBuffer = await file.arrayBuffer();
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('cvs')
      .upload(fileName, fileBuffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error('Error uploading CV:', uploadError);
      return new Response(
        JSON.stringify({ error: 'Failed to upload CV' }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const { data: signedUrlData, error: signedUrlError } = await supabase.storage
      .from('cvs')
      .createSignedUrl(fileName, 31536000);

    if (signedUrlError) {
      console.error('Error creating signed URL:', signedUrlError);
      return new Response(
        JSON.stringify({ error: 'Failed to generate CV URL' }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const cvUrl = signedUrlData.signedUrl;

    const { data: application, error: dbError } = await supabase
      .from('job_applications')
      .insert({
        job_title: jobTitle,
        full_name: fullName,
        email: email,
        phone: phone,
        linkedin: linkedin || null,
        cv_url: cvUrl,
        cover_letter: coverLetter || null,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Error inserting job application:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to submit application' }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    await sendEmailNotification({
      jobTitle,
      fullName,
      email,
      phone,
      linkedin,
      coverLetter,
    }, cvUrl);

    return new Response(
      JSON.stringify({ success: true, id: application.id }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});