import { HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BooksPage } from './pages/BooksPage';
import { ServicesPage } from './pages/ServicesPage';
import { MembershipPage } from './pages/MembershipPage';
import { ContactPage } from './pages/ContactPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { publicAsset } from './lib/assets';

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <img src={publicAsset('/assets/images/kandy-library-icon.svg')} alt="" />
      <p className="premium-label">404 · Page not found</p>
      <h1>This shelf is currently empty.</h1>
      <p>The page you’re looking for does not exist or has moved.</p>
      <Link to="/" className="button button-primary">Back to home</Link>
    </main>
  );
}

function PageMeta() {
  const location = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Kandy Public Library',
      '/about': 'About | Kandy Public Library',
      '/books': 'Books | Kandy Public Library',
      '/services': 'Services | Kandy Public Library',
      '/membership': 'Membership | Kandy Public Library',
      '/contact': 'Contact | Kandy Public Library',
    };
    document.title = titles[location.pathname] ?? 'Page Not Found | Kandy Public Library';
    window.scrollTo({ top: 0, behavior: 'auto' });
    const revealTargets = document.querySelectorAll('.section, .highlights, .category-card, .programme-grid article');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-revealed'));
    }, { threshold: 0 });
    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <PageMeta />
      <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
