import { Link } from 'react-router-dom';
import { libraryInfo } from '../../data/libraryInfo';
import { ArrowUp } from 'lucide-react';
import { publicAsset } from '../../lib/assets';

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <img src={publicAsset('/assets/images/kandy-library-footer-logo.svg')} alt="Kandy Public Library" className="footer-logo" />
              <h3>Kandy Public Library</h3>
              <p>
              A community library devoted to literacy, learning, and quiet discovery for readers, students, and researchers across Kandy.
            </p>
          </div>

          <div>
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/membership">Membership</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
              <h3>Explore</h3>
              <ul>
              <li><Link to="/books">Book Catalogue</Link></li>
              <li><Link to="/books">Reading Categories</Link></li>
              <li><Link to="/services">Library Services</Link></li>
                <li><Link to="/membership">Membership Information</Link></li>
            </ul>
          </div>
          <div>
              <h3>Contact Information</h3>
              <ul className="footer-contact">
                <li>{libraryInfo.address}</li>
                <li>{libraryInfo.phone}</li>
                <li>{libraryInfo.email}</li>
                <li>{libraryInfo.hours}</li>
              </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© 2026 Kandy Public Library. All rights reserved.</span>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp /></button>
          </div>
        </div>
      </div>
    </footer>
  );
}
