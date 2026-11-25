import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { publicAsset } from '../../lib/assets';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Books', to: '/books' },
  { label: 'Services', to: '/services' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const goHomeFromLogo = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={scrolled ? 'header-scrolled' : ''}>
      <div className="header-inner">
        <Link to="/" onClick={goHomeFromLogo} className="header-brand" aria-label="Kandy Public Library home">
          <img src={publicAsset('/assets/images/kandy-library-logo.svg')} alt="Kandy Public Library" className="header-logo" />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'nav-link-active' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Link to="/membership" className="header-cta">Become a member</Link>

        <div className="mobile-menu-toggle">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-emerald-200 hover:text-emerald-800"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="mobile-nav-panel">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {navItems.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-medium ${
                    isActive ? 'bg-emerald-50 text-emerald-800' : 'text-slate-600 hover:bg-slate-100'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link to="/membership" onClick={() => setIsOpen(false)} className="mobile-membership-cta">Become a member</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
