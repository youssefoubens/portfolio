import { FiGithub, FiLinkedin } from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';
import "../../css/footer.css"
const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: 'https://github.com/youssefoubens',
  },
  {
    id: 2,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/ouben-said-youssef/',
  },
];

const AppFooter = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <span className="footer-logo-text">
            Youssef Ouben Said
            <span className="footer-logo-subtitle">SOFTWARE ENGINEER</span>
          </span>
        </div>

        {/* Social Links */}
        <ul className="footer-social-links">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <AppFooterCopyright />
      </div>
    </footer>
  );
};

export default AppFooter;