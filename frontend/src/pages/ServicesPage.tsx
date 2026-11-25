import { ServiceCard } from '../components/services/ServiceCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { services } from '../data/services';

export function ServicesPage() {
  return (
    <main>
      <section className="page-hero"><div className="site-container"><SectionHeading eyebrow="Services" title="Resources for every reader" description="Explore the practical resources and programmes offered by the library." /></div></section>
      <section className="section site-container"><div className="service-grid service-grid-large">{services.map((service) => <ServiceCard key={service.service_id} service={service} />)}</div></section>
    </main>
  );
}
