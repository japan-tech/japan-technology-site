import './Footer.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <img src="/logo/logo_clean_dark_bg_200w.png" alt="" className="footer-logo-mark" />
          <div className="footer-brand-text">
            <span className="footer-wordmark">
              JAPAN TECHNOLOGY <span className="footer-wordmark-accent">CO., LTD</span>
            </span>
            <span className="footer-slogan">EXPORT FROM JAPAN TO THE WORLD</span>
          </div>
        </div>

        <div className="site-footer-columns">
          <div className="footer-column">
            <p className="footer-column-title">Company</p>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">How It Works</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <p className="footer-column-title">Get in Touch</p>
            <ul>
              <li><a href="#request">Request a Service</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#location">Find Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <p className="footer-column-title">Connect</p>
            <ul>
              <li>
                <a href="https://instagram.com/japantechnology_" target="_blank" rel="noopener noreferrer">
                  <i className="ti ti-brand-instagram" aria-hidden="true"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@japan.tech.jdm" target="_blank" rel="noopener noreferrer">
                  <i className="ti ti-brand-tiktok" aria-hidden="true"></i> TikTok
                </a>
              </li>
              <li>
                <a href="https://auctions.yahoo.co.jp/seller/27fYwvFBQ2uFVTZ4sZycReaNDQuwA" target="_blank" rel="noopener noreferrer">
                  <i className="ti ti-external-link" aria-hidden="true"></i> Yahoo Shop
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p className="footer-copyright">© {currentYear} Japan Technology Co., Ltd. All rights reserved.</p>
          <p className="footer-disclaimer">
            Exporting from Japan since 2007. Based in Toyama, Japan.
          </p>
        </div>
      </div>
    </footer>
  );
}