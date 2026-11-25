import { BookText, BriefcaseBusiness, Users, Search, Computer, ArrowLeftRight, Printer, Sparkles } from 'lucide-react';
import type { Service } from '../../types';

const iconMap = {
  book: BookText,
  chair: BriefcaseBusiness,
  search: Search,
  child: Users,
  computer: Computer,
  exchange: ArrowLeftRight,
  printer: Printer,
  users: Sparkles,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? BookText;

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(15,23,42,0.08)]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
    </article>
  );
}
