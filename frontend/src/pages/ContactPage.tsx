import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormField } from '../components/forms/FormField';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SuccessModal } from '../components/ui/SuccessModal';
import { libraryInfo } from '../data/libraryInfo';
import type { ContactFormValues } from '../types';

const schema = z.object({
  full_name: z.string().trim().min(2, 'Full name is required.').max(120),
  email: z.string().trim().email('Please enter a valid email address.'),
  subject: z.string().trim().min(3, 'Subject must be at least 3 characters.').max(150),
  message: z.string().trim().min(10, 'Message must be at least 10 characters.').max(2000),
});

export function ContactPage() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (_values: ContactFormValues) => {
    reset();
    setIsSuccessOpen(true);
  };

  return (
    <main>
      <section className="page-hero"><div className="site-container"><SectionHeading eyebrow="Contact" title="We would love to hear from you" description="Questions about membership, services or the book collection are welcome." /></div></section>
      <section className="section site-container contact-layout">
        <aside className="contact-card">
          <h2>Library information</h2>
          <div className="contact-item"><MapPin /><div><span>Address</span><p>{libraryInfo.address}</p></div></div>
          <div className="contact-item"><Phone /><div><span>Phone</span><p>{libraryInfo.phone}</p></div></div>
          <div className="contact-item"><Mail /><div><span>Email</span><p>{libraryInfo.email}</p></div></div>
          <div className="contact-item"><Clock /><div><span>Opening hours</span><p>{libraryInfo.hours}</p></div></div>
          <a className="button button-light" href={`mailto:${libraryInfo.email}`}>Open email app</a>
        </aside>
        <form onSubmit={handleSubmit(onSubmit)} className="application-form contact-form">
          <FormField label="Full Name" name="full_name" error={errors.full_name} required><input id="full_name" {...register('full_name')} /></FormField>
          <FormField label="Email" name="email" error={errors.email} required><input id="email" type="email" {...register('email')} /></FormField>
          <FormField label="Subject" name="subject" error={errors.subject} required><input id="subject" {...register('subject')} /></FormField>
          <FormField label="Message" name="message" error={errors.message} required><textarea id="message" rows={5} {...register('message')} /></FormField>
          <Button type="submit" size="lg" className="w-full">Validate message</Button>
        </form>
      </section>
      <section className="site-container map-section" aria-label="Library location"><MapPin /><div><p className="eyebrow">Find us</p><h2>{libraryInfo.address}</h2><p>Plan your visit during the displayed opening hours.</p></div></section>
      <SuccessModal
        open={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Message Sent Successfully!"
        message="Thank you for contacting Kandy Public Library. Your message has been submitted successfully. Our team appreciates your interest."
        note="This website demo does not send or store your message."
      />
    </main>
  );
}
