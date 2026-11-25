import { ArrowRight, HeartHandshake, Landmark, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BookCard } from '../components/books/BookCard';
import { ServiceCard } from '../components/services/ServiceCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { books } from '../data/books';
import { services } from '../data/services';
import { publicAsset } from '../lib/assets';

const categories = [
  { name: 'Fiction', bookCategories: ['Fiction', 'Classic Fiction'], image: publicAsset('/assets/images/library-gallery.jpg') },
  { name: 'Science', bookCategories: ['Science'], image: publicAsset('/assets/images/library-shelves.jpg') },
  { name: 'Technology', bookCategories: ['Technology'], image: publicAsset('/assets/images/library-reading-room.jpg') },
  { name: "Children's Books", bookCategories: ['Children'], image: publicAsset('/assets/images/library-gallery.jpg') },
];

export function HomePage() {
  return (
    <main>
      <section className="premium-hero">
        <img className="premium-hero-image" src={publicAsset('/assets/images/library-hero.jpg')} alt="A welcoming library interior filled with books" fetchPriority="high" />
        <div className="premium-hero-overlay" />
        <div className="premium-hero-content site-container">
          <p className="premium-label">WELCOME TO KANDY PUBLIC LIBRARY</p>
          <h1>Discover a World of Knowledge</h1>
          <p>Explore books, embrace learning, and discover endless possibilities at your library.</p>
          <div className="hero-actions">
            <Link className="button button-gold" to="/books">Explore Our Collection <ArrowRight /></Link>
            <Link className="button button-hero-secondary" to="/membership">Become a Member</Link>
          </div>
        </div>
      </section>

      <section className="highlights premium-highlights">
        <div className="site-container highlight-grid">
          <article><strong data-count={books.length}>{books.length}</strong><span>Titles in the local catalogue</span></article>
          <article><strong data-count="8">8</strong><span>Library services</span></article>
          <article><strong data-count="3">3</strong><span>Membership types</span></article>
        </div>
      </section>

      <section className="section site-container">
        <SectionHeading eyebrow="Explore categories" title="Find your next interest" description="Browse the collection through the subjects represented in our local catalogue." />
        <div className="category-grid">
          {categories.map((category) => (
            <Link key={category.name} className="category-card" to="/books">
              <img src={category.image} alt="" loading="lazy" />
              <div><span>{books.filter((book) => category.bookCategories.includes(book.category)).length} titles</span><h3>{category.name}</h3><ArrowRight /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section featured-section">
        <div className="site-container">
          <SectionHeading eyebrow="Featured collection" title="Stories worth discovering" description="Explore a carefully selected mix of fiction, history, science and personal growth." />
          <div className="book-grid">{books.slice(0, 4).map((book) => <BookCard key={book.book_id} book={book} />)}</div>
          <div className="section-action"><Link className="button button-secondary" to="/books">View All Books</Link></div>
        </div>
      </section>

      <section className="section site-container about-preview premium-about">
        <div className="about-preview-image"><img src={publicAsset('/assets/images/library-reading-room.jpg')} alt="An inviting library reading room" loading="lazy" /></div>
        <div className="about-preview-copy">
          <p className="eyebrow">About our library</p>
          <h2>A community space for curious minds.</h2>
          <p>Kandy Public Library brings books, learning resources and reading culture together in an accessible, welcoming setting.</p>
          <Link className="text-link" to="/about">Discover our story <ArrowRight /></Link>
        </div>
      </section>

      <section className="section services-band">
        <div className="site-container">
          <SectionHeading eyebrow="Library services" title="More than a place for books" description="Practical resources and a quiet, supportive environment for every kind of reader." />
          <div className="service-grid">{services.slice(0, 4).map((service) => <ServiceCard key={service.service_id} service={service} />)}</div>
          <div className="section-action"><Link className="button button-secondary" to="/services">View all services</Link></div>
        </div>
      </section>

      <section className="section why-editorial site-container">
        <div className="why-editorial-image"><img src={publicAsset('/assets/images/library-shelves.jpg')} alt="Shelves of books in a public library" loading="lazy" /></div>
        <div className="why-editorial-copy">
          <p className="eyebrow">Why reading matters</p>
          <h2>A page can open a new perspective.</h2>
          <p>Reading creates space for curiosity, reflection and independent learning. It connects individuals with ideas, stories and communities beyond their everyday experience.</p>
          <div className="why-mini-grid">
            {[{ icon: Search, title: 'Access', text: 'Knowledge for every reader.' }, { icon: Sparkles, title: 'Discovery', text: 'Ideas beyond the familiar.' }, { icon: HeartHandshake, title: 'Community', text: 'Shared learning and connection.' }, { icon: Landmark, title: 'Culture', text: 'A lifelong reading tradition.' }].map(({ icon: Icon, title, text }) => (
              <article key={title}><Icon /><strong>{title}</strong><span>{text}</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="site-container">
          <SectionHeading eyebrow="Inside the library" title="Spaces for reading and discovery" align="center" />
          <div className="library-gallery">
            <img src={publicAsset('/assets/images/library-hero.jpg')} alt="Library interior" loading="lazy" />
            <img src={publicAsset('/assets/images/library-reading-room.jpg')} alt="Library reading room" loading="lazy" />
            <img src={publicAsset('/assets/images/library-shelves.jpg')} alt="Library bookshelves" loading="lazy" />
            <img src={publicAsset('/assets/images/library-gallery.jpg')} alt="Comfortable library space" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section site-container programmes-section">
        <SectionHeading eyebrow="Events and activities" title="Ways to take part" description="Explore the library programmes currently represented by the project." />
        <div className="programme-grid">
          {['Community reading programmes', 'Children’s reading activities', 'Book clubs and workshops'].map((programme) => <article key={programme}><span>Library programme</span><h3>{programme}</h3><Link to="/services">View services <ArrowRight /></Link></article>)}
        </div>
      </section>

      <section className="membership-banner premium-membership site-container">
        <div><p className="eyebrow">Your next chapter</p><h2>Become part of the reading community.</h2></div>
        <Link className="button button-gold" to="/membership">Explore membership</Link>
      </section>
    </main>
  );
}
