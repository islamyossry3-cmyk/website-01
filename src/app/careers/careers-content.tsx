'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Job {
  title: string;
  type: string;
  desc: string;
  fullDescription: string;
  responsibilities: string[];
  requirements: string[];
}

export const roles: Job[] = [
  {
    title: 'Product / Experience Designer',
    type: 'Full-time • Hybrid',
    desc: 'Design modern human+data experiences: onboarding ecosystems, gamified learning, dashboards, and interaction systems.',
    fullDescription: 'We are looking for a talented Product/Experience Designer to create intuitive and engaging user experiences that blend human behavior with data insights. You will work on designing comprehensive employee journey experiences, gamified learning platforms, and analytical dashboards.',
    responsibilities: [
      'Design end-to-end user experiences for employee onboarding and engagement platforms',
      'Create gamified learning experiences and interactive dashboards',
      'Develop design systems and interaction patterns',
      'Collaborate with developers and stakeholders to bring designs to life',
      'Conduct user research and usability testing'
    ],
    requirements: [
      '3+ years of experience in product or UX/UI design',
      'Strong portfolio demonstrating modern design work',
      'Proficiency in Figma, Adobe XD, or similar tools',
      'Understanding of behavioral psychology and gamification principles',
      'Excellent communication and collaboration skills'
    ]
  },
  {
    title: 'People Analytics Consultant',
    type: 'Contract • Remote',
    desc: 'Translate signals into actionable models: journey friction, pulse analysis, segmentation, and governance reporting.',
    fullDescription: 'Join our team as a People Analytics Consultant to transform employee data into strategic insights. You will develop analytical models that help organizations understand employee behavior, engagement patterns, and organizational dynamics.',
    responsibilities: [
      'Analyze employee journey data to identify friction points',
      'Develop predictive models for engagement and retention',
      'Create segmentation frameworks and reporting dashboards',
      'Design and implement pulse surveys and analysis frameworks',
      'Present findings and recommendations to leadership teams'
    ],
    requirements: [
      '5+ years of experience in people analytics or HR analytics',
      'Strong statistical analysis and data visualization skills',
      'Proficiency in tools like Python, R, SQL, or similar',
      'Experience with survey design and analysis',
      'Excellent storytelling and presentation abilities'
    ]
  },
  {
    title: 'Facilitator (Culture & Team Experiences)',
    type: 'Part-time • On-site (MENA)',
    desc: 'Lead psychology-based experiences, team building, hackathons, and activation sessions.',
    fullDescription: 'We need an energetic Facilitator to design and lead engaging team experiences that drive culture transformation. You will facilitate workshops, team building sessions, and activation events that bring our methodologies to life.',
    responsibilities: [
      'Design and facilitate team building and culture activation sessions',
      'Lead workshops on employee engagement and organizational culture',
      'Facilitate hackathons and innovation sessions',
      'Apply psychological principles to create memorable experiences',
      'Adapt facilitation style to different audiences and contexts'
    ],
    requirements: [
      '3+ years of facilitation or training experience',
      'Background in psychology, organizational development, or related field',
      'Experience with experiential learning and team dynamics',
      'Excellent presentation and public speaking skills',
      'Ability to travel within the MENA region'
    ]
  },
  {
    title: 'Full‑Stack Engineer (React / Node)',
    type: 'Full-time • Remote',
    desc: 'Build interactive tools and platform modules. Strong UI craft + performance mindset.',
    fullDescription: 'We are seeking a skilled Full-Stack Engineer to build and maintain our platform tools and interactive modules. You will work with modern technologies to create performant, user-friendly applications that power our products.',
    responsibilities: [
      'Develop and maintain web applications using React and Node.js',
      'Build interactive tools and platform modules',
      'Optimize application performance and user experience',
      'Collaborate with designers to implement pixel-perfect UIs',
      'Write clean, maintainable, and well-tested code'
    ],
    requirements: [
      '4+ years of full-stack development experience',
      'Expert knowledge of React, TypeScript, and Node.js',
      'Strong understanding of modern web performance optimization',
      'Experience with databases (SQL and NoSQL)',
      'Passion for creating exceptional user experiences'
    ]
  }
];

interface CareersContentProps {
  roles: Job[];
}

export function CareersContent({ roles }: CareersContentProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationJobTitle, setApplicationJobTitle] = useState('');

  const handleApply = (job: Job) => {
    setApplicationJobTitle(job.title);
    setSelectedJob(null);
    setShowApplicationForm(true);
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {roles.map((r) => (
          <div key={r.title} className="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-soft backdrop-blur">
            <div className="text-xs font-semibold text-slate-500">{r.type}</div>
            <div className="mt-2 text-xl font-semibold text-slate-900">{r.title}</div>
            <div className="mt-3 text-sm text-slate-600">{r.desc}</div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setSelectedJob(r)}
                className="inline-flex rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-200"
              >
                View Details
              </button>
              <button
                onClick={() => handleApply(r)}
                className="inline-flex rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute right-6 top-6 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-xs font-semibold text-slate-500">{selectedJob.type}</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-slate-900">{selectedJob.title}</h2>
              <p className="mt-4 text-slate-600">{selectedJob.fullDescription}</p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900">Key Responsibilities</h3>
                <ul className="mt-3 space-y-2">
                  {selectedJob.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900">Requirements</h3>
                <ul className="mt-3 space-y-2">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => handleApply(selectedJob)}
                  className="rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                >
                  Apply for this role
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="rounded-xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showApplicationForm && (
          <ApplicationFormModal
            jobTitle={applicationJobTitle}
            onClose={() => setShowApplicationForm(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

interface ApplicationFormModalProps {
  jobTitle: string;
  onClose: () => void;
}

function ApplicationFormModal({ jobTitle, onClose }: ApplicationFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: ''
  });
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!cvFile) {
        throw new Error('Please upload your CV');
      }

      const fileExt = cvFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const formDataToSend = new FormData();
      formDataToSend.append('file', cvFile);
      formDataToSend.append('fileName', fileName);
      formDataToSend.append('jobTitle', jobTitle);
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('linkedin', formData.linkedin);
      formDataToSend.append('coverLetter', formData.coverLetter);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/submit-job-application`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
          },
          body: formDataToSend
        }
      );

      if (!response.ok) {
        let errorMessage = 'Failed to submit application';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          errorMessage = `Server error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB');
        return;
      }
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setError('Only PDF, DOC, and DOCX files are allowed');
        return;
      }
      setCvFile(file);
      setError('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="font-display text-2xl font-bold text-slate-900">Apply for Position</h2>
        <p className="mt-2 text-sm text-slate-600">Submit your application for: <span className="font-semibold text-slate-900">{jobTitle}</span></p>

        {success ? (
          <div className="mt-8 rounded-2xl bg-green-50 p-6 text-center">
            <div className="text-4xl">✓</div>
            <div className="mt-3 font-semibold text-green-900">Application Submitted Successfully!</div>
            <div className="mt-2 text-sm text-green-700">We will review your application and get back to you soon.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-900">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900">LinkedIn Profile</label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900">Upload CV/Resume *</label>
              <input
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 file:mr-4 file:rounded-lg file:border-0 file:bg-brand-green file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand-green/90"
              />
              <p className="mt-1 text-xs text-slate-500">PDF, DOC, or DOCX (max 5MB)</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900">Cover Letter / Message</label>
              <textarea
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                rows={4}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                placeholder="Tell us why you're a great fit for this role..."
              />
            </div>

            {error && (
              <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-200"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
