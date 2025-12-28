'use client';

import * as React from 'react';
import Link from 'next/link';

function formatMoney(n: number, currency = 'USD') {
  try {
    return new Intl.NumberFormat('en', { style: 'currency', currency, maximumFractionDigits: 0 }).format(n);
  } catch {
    return `$${Math.round(n).toLocaleString('en')}`;
  }
}

export function ROICalculator() {
  const [currency, setCurrency] = React.useState<'USD' | 'EGP' | 'SAR' | 'QAR' | 'OMR'>('USD');

  const [headcount, setHeadcount] = React.useState(500);
  const [avgSalary, setAvgSalary] = React.useState(1200); // monthly
  const [attritionRate, setAttritionRate] = React.useState(18); // %
  const [replacementCostPct, setReplacementCostPct] = React.useState(50); // % of annual salary
  const [productivityRampMonths, setProductivityRampMonths] = React.useState(3);
  const [expectedAttritionReduction, setExpectedAttritionReduction] = React.useState(10); // % relative reduction

  const annualSalary = avgSalary * 12;
  const leavers = headcount * (attritionRate / 100);

  const replacementCost = leavers * annualSalary * (replacementCostPct / 100);

  // simple productivity loss estimate: leavers * ramp months * monthly salary * 0.5 (assume 50% productivity loss during ramp)
  const productivityLoss = leavers * productivityRampMonths * avgSalary * 0.5;

  const totalCost = replacementCost + productivityLoss;

  const improvedLeavers = leavers * (1 - expectedAttritionReduction / 100);
  const improvedReplacementCost = improvedLeavers * annualSalary * (replacementCostPct / 100);
  const improvedProductivityLoss = improvedLeavers * productivityRampMonths * avgSalary * 0.5;
  const improvedTotal = improvedReplacementCost + improvedProductivityLoss;

  const savings = totalCost - improvedTotal;

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
          <div className="text-sm font-bold text-slate-900">Inputs</div>
          <div className="mt-4 grid gap-4">
            <Field label="Currency">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as any)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-pink/40"
              >
                <option value="USD">USD</option>
                <option value="EGP">EGP</option>
                <option value="SAR">SAR</option>
                <option value="QAR">QAR</option>
                <option value="OMR">OMR</option>
              </select>
            </Field>

            <Field label="Headcount">
              <input
                type="number"
                min={1}
                value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value))}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-pink/40"
              />
            </Field>

            <Field label="Average monthly salary">
              <input
                type="number"
                min={0}
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-pink/40"
              />
            </Field>

            <Field label="Annual attrition rate (%)">
              <input
                type="number"
                min={0}
                max={100}
                value={attritionRate}
                onChange={(e) => setAttritionRate(Number(e.target.value))}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-pink/40"
              />
            </Field>

            <Field label="Replacement cost (% of annual salary)">
              <input
                type="number"
                min={0}
                max={300}
                value={replacementCostPct}
                onChange={(e) => setReplacementCostPct(Number(e.target.value))}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-pink/40"
              />
              <p className="mt-2 text-xs text-slate-500">
                Includes recruiting, onboarding, training, manager time, and opportunity cost (indicative).
              </p>
            </Field>

            <Field label="Productivity ramp (months)">
              <input
                type="number"
                min={0}
                max={24}
                value={productivityRampMonths}
                onChange={(e) => setProductivityRampMonths(Number(e.target.value))}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-pink/40"
              />
            </Field>

            <Field label="Expected attrition reduction (relative %)">
              <input
                type="number"
                min={0}
                max={100}
                value={expectedAttritionReduction}
                onChange={(e) => setExpectedAttritionReduction(Number(e.target.value))}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-pink/40"
              />
              <p className="mt-2 text-xs text-slate-500">
                Example: 10% reduction means attrition goes from 18% → 16.2%.
              </p>
            </Field>
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-slate-200/70 bg-slate-50 p-6">
          <div className="text-sm font-bold text-slate-900">Disclaimer</div>
          <p className="mt-2 text-sm text-slate-600">
            This calculator is indicative and simplified. Real ROI depends on roles, labor market, time-to-productivity, internal processes, and baseline maturity.
          </p>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="rounded-3xl bg-slate-950 p-8 text-white">
          <div className="text-xs font-semibold text-white/70">Estimated annual impact</div>
          <div className="mt-2 font-display text-3xl font-semibold">Cost of attrition + ramp</div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Metric label="Estimated leavers / year" value={Math.round(leavers).toLocaleString('en')} />
            <Metric label="Annual salary (avg)" value={formatMoney(annualSalary, currency)} />
            <Metric label="Replacement cost (est.)" value={formatMoney(replacementCost, currency)} />
            <Metric label="Ramp productivity loss (est.)" value={formatMoney(productivityLoss, currency)} />
          </div>

          <div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold text-white/70">Total estimated annual cost</div>
            <div className="mt-2 text-4xl font-semibold">{formatMoney(totalCost, currency)}</div>
            <div className="mt-2 text-sm text-white/70">
              If attrition reduces by <b>{expectedAttritionReduction}%</b> (relative), estimated savings:
            </div>
            <div className="mt-3 text-2xl font-semibold text-[rgba(246,119,130,0.95)]">{formatMoney(savings, currency)}</div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/contact?intent=diagnosis"
              className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Book a Diagnosis
            </Link>
            <Link
              href="/contact?intent=demo"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:-translate-y-0.5"
            >
              Request Demo
            </Link>
          </div>

          <div className="mt-6 text-xs text-white/60">
            We can map your real baseline and identify the highest-leverage intervention.
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-semibold text-slate-600">{label}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
      <div className="text-xs font-semibold text-white/60">{label}</div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
    </div>
  );
}
