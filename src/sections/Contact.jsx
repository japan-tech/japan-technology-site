import './Contact.css';

const WHATSAPP_NUMBERS = [
  { language: 'Russian',   flag: '🇷🇺', number: '+7 914 790-30-57',  href: 'https://wa.me/79147903057' },
  { language: 'Japanese',  flag: '🇯🇵', number: '+81 80-9780-1708',  href: 'https://wa.me/818097801708' },
  { language: 'English',   flag: '🇬🇧', number: '+357 95 726933',    href: 'https://wa.me/35795726933' },
];

const PHONE_NUMBERS = [
  { label: 'Russia',  number: '+7 914 790-30-57',  href: 'tel:+79147903057' },
  { label: 'Japan',   number: '+81 80-9780-1708',  href: 'tel:+818097801708' },
];

const SOCIAL_LINKS = [
  { name: 'Instagram',           handle: '@japantechnology_', icon: 'ti-brand-instagram', href: 'https://instagram.com/japantechnology_' },
  { name: 'Instagram (JDM)',     handle: '@jtech_jdm',         icon: 'ti-brand-instagram', href: 'https://instagram.com/jtech_jdm' },
  { name: 'TikTok',              handle: '@japan.tech.jdm',    icon: 'ti-brand-tiktok',    href: 'https://tiktok.com/@japan.tech.jdm' },
  { name: 'Yahoo Japan Shop',    handle: 'View our auctions',  icon: 'ti-external-link',   href: 'https://auctions.yahoo.co.jp/seller/27fYwvFBQ2uFVTZ4sZycReaNDQuwA' },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-header">
          <p className="eyebrow">Get in Touch</p>
          <h2 className="section-title">Contact us in<br />any language.</h2>
          <p className="section-sub">
            Reach out however works best for you — email, WhatsApp, phone, or social. We respond in English, Russian, and Japanese.
          </p>
        </div>

        <div className="contact-grid">
          {/* WhatsApp — your strongest channel, get its own prominent card */}
          <div className="contact-card contact-card--featured">
            <div className="contact-card-header">
              <i className="ti ti-brand-whatsapp" aria-hidden="true"></i>
              <h3 className="contact-card-title">WhatsApp</h3>
              <span className="contact-card-badge">Fastest reply</span>
            </div>
            <p className="contact-card-sub">Pick whichever language is easiest for you.</p>
            <ul className="whatsapp-list">
              {WHATSAPP_NUMBERS.map(w => (
                <li key={w.language}>
                  <a href={w.href} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                    <span className="whatsapp-flag" aria-hidden="true">{w.flag}</span>
                    <span className="whatsapp-info">
                      <span className="whatsapp-lang">{w.language}</span>
                      <span className="whatsapp-number">{w.number}</span>
                    </span>
                    <i className="ti ti-arrow-right" aria-hidden="true"></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="contact-card-header">
              <i className="ti ti-mail" aria-hidden="true"></i>
              <h3 className="contact-card-title">Email</h3>
            </div>
            <p className="contact-card-sub">For inquiries, quotes, and detailed requests.</p>
            <a href="mailto:contact@japan-technology.com" className="contact-link">
              contact@japan-technology.com
            </a>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <div className="contact-card-header">
              <i className="ti ti-phone" aria-hidden="true"></i>
              <h3 className="contact-card-title">Phone</h3>
            </div>
            <p className="contact-card-sub">Call us during business hours (9:00–21:00 JST).</p>
            <ul className="phone-list">
              {PHONE_NUMBERS.map(p => (
                <li key={p.label}>
                  <span className="phone-label">{p.label}</span>
                  <a href={p.href} className="contact-link">{p.number}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="contact-card contact-card--social">
            <div className="contact-card-header">
              <i className="ti ti-share" aria-hidden="true"></i>
              <h3 className="contact-card-title">Social & Shop</h3>
            </div>
            <p className="contact-card-sub">See our current inventory and recent finds.</p>
            <ul className="social-list">
              {SOCIAL_LINKS.map(s => (
                <li key={s.handle}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className={`ti ${s.icon}`} aria-hidden="true"></i>
                    <span className="social-info">
                      <span className="social-name">{s.name}</span>
                      <span className="social-handle">{s.handle}</span>
                    </span>
                    <i className="ti ti-arrow-up-right social-arrow" aria-hidden="true"></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}