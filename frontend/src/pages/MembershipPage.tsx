import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormField } from '../components/forms/FormField';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import type { MembershipFormValues } from '../types';
import { membershipTypes } from '../data/membership';

const schema = z.object({
  full_name: z.string().trim().min(2, 'Full name is required.').max(120).regex(/^[a-zA-Z\s.'-]+$/, 'Please enter a valid name.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z.string().trim().regex(/^\+?[0-9\s-]{9,15}$/, 'Please enter a valid phone number.'),
  nic_number: z.string().trim().regex(/^([0-9]{9}[vVxX]|[0-9]{12})$/, 'Please enter a valid NIC number.'),
  address: z.string().trim().min(5, 'Address must be at least 5 characters.').max(255),
  membership_type: z.enum(['Student', 'Adult', 'Senior']),
}).refine((data) => data.membership_type !== undefined, {
  path: ['membership_type'],
  message: 'Please select a valid membership type.',
});

export function MembershipPage() {
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MembershipFormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_values: MembershipFormValues) => {
    setStatus(null);
    setIsSubmitting(true);

    try {
      setStatus({ type: 'success', message: 'Demo complete: your details passed validation. No application was transmitted or stored.' });
      reset();
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Unable to submit your application.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="page-hero"><div className="site-container"><SectionHeading eyebrow="Membership" title="Become a library member" description="Choose a membership type and complete the application demonstration." /></div></section>
      <section className="section site-container">
        <div className="membership-grid">
          {membershipTypes.map((item) => (
            <article key={item.name} className="membership-card"><p className="eyebrow">{item.name}</p><p>{item.description}</p></article>
          ))}
        </div>
        <div className="application-layout">
          <aside className="application-info"><h2>Membership benefits</h2><ul><li>Borrow from the local collection</li><li>Use reading and study spaces</li><li>Access library research support</li></ul><p className="demo-note">Application instructions: select the category that best describes you, then complete the form. This is a frontend demonstration only.</p></aside>
          <form onSubmit={handleSubmit(onSubmit)} className="application-form">
          {status ? (
            <div className={`mb-6 rounded-2xl border px-4 py-3 text-sm ${status.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-red-200 bg-red-50 text-red-700'}`} role="alert">
              {status.message}
            </div>
          ) : null}

          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Full Name" name="full_name" error={errors.full_name} required>
              <input id="full_name" {...register('full_name')} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100" />
            </FormField>

            <FormField label="Email" name="email" error={errors.email} required>
              <input id="email" type="email" {...register('email')} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100" />
            </FormField>

            <FormField label="Phone" name="phone" error={errors.phone} required>
              <input id="phone" type="tel" {...register('phone')} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100" />
            </FormField>

            <FormField label="NIC Number" name="nic_number" error={errors.nic_number} required>
              <input id="nic_number" {...register('nic_number')} placeholder="e.g. 991234567V" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100" />
            </FormField>
          </div>

          <div className="mt-6">
            <FormField label="Address" name="address" error={errors.address} required>
              <textarea id="address" rows={4} {...register('address')} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100" />
            </FormField>
          </div>

          <div className="mt-6">
            <FormField label="Membership Type" name="membership_type" error={errors.membership_type} required>
              <select id="membership_type" {...register('membership_type')} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100">
                <option value="">Select membership type…</option>
                <option value="Student">Student</option>
                <option value="Adult">Adult</option>
                <option value="Senior">Senior</option>
              </select>
            </FormField>
          </div>

          <div className="mt-8">
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting application...' : 'Submit application'}
            </Button>
          </div>
        </form>
        </div>
      </section>
    </main>
  );
}
