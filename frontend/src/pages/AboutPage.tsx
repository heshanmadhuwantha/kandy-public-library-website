import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { publicAsset } from '../lib/assets';

export function AboutPage() {
  return (
    <main>
      <section className="page-hero"><div className="site-container"><SectionHeading eyebrow="About us" title="A library for curious minds" description="Kandy Public Library supports reading, learning and community connection." /></div></section>
      <section className="section site-container about-layout">
        <div className="about-image"><img src={publicAsset('/assets/images/library-reading-room.jpg')} alt="A welcoming library reading environment" /></div>
        <div>
          <p className="eyebrow">Our purpose</p><h2>Making knowledge feel accessible.</h2>
          <p>We provide an inviting setting where readers, students, researchers and families can discover books and spend time learning.</p>
          <p>Our collection and services are shaped around open access, quiet study and a lasting culture of reading.</p>
        </div>
      </section>
      <section className="section values-band">
        <div className="site-container">
          <SectionHeading eyebrow="Our direction" title="What guides the library" align="center" />
          <div className="values-grid">
            {[['Mission', 'Support lifelong learning through accessible books and practical library services.'], ['Vision', 'Be a welcoming centre for reading, knowledge and community discovery.'], ['Core values', 'Curiosity, inclusion, respect, literacy and responsible use of shared resources.']].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="membership-banner site-container"><div><p className="eyebrow">Reading is better together</p><h2>Find your place in the library.</h2></div><Link className="button button-light" to="/membership">Become a member</Link></section>
    </main>
  );
}
