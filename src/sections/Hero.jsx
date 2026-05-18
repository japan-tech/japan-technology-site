import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img
          src="/logo/logo_clean_dark_bg_800w.png"
          alt=""
          className="hero-watermark"
        />
      </div>
      <div className="hero-inner">
        <p className="hero-eyebrow">EXPORT FROM JAPAN · SINCE 2007</p>
        <h1 className="hero-title">
          Exports from Japan<br />
          <span className="hero-title-accent">to the World.</span>
        </h1>
        <p className="hero-sub">
          Cars, boats, JDM parts, and custom orders — sourced directly from Japan and shipped anywhere in the world. Trilingual service in English, Russian, and Japanese.
        </p>
        <div className="hero-actions">
          <a href="#request" className="btn-primary">Request a Service</a>
          <a href="#about" className="hero-secondary-link">
            Learn more <i className="ti ti-arrow-down" aria-hidden="true"></i>
          </a>
        </div>
        <div className="hero-quick-info">
          <span className="hero-quick-item">
            <i className="ti ti-car" aria-hidden="true"></i> Cars
          </span>
          <span className="hero-quick-dot">·</span>
          <span className="hero-quick-item">
            <i className="ti ti-anchor" aria-hidden="true"></i> Boats
          </span>
          <span className="hero-quick-dot">·</span>
          <span className="hero-quick-item">
            <i className="ti ti-settings" aria-hidden="true"></i> JDM Parts
          </span>
          <span className="hero-quick-dot">·</span>
          <span className="hero-quick-item">
            <i className="ti ti-package" aria-hidden="true"></i> Custom Requests
          </span>
        </div>
      </div>
    </section>
  );
}