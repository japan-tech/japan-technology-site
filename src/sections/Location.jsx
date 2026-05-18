import './Location.css';

export default function Location() {
  return (
    <section className="location-section" id="location">
      <div className="location-inner">
        <div className="location-info">
          <p className="eyebrow">Where to Find Us</p>
          <h2 className="section-title">Based in Toyama,<br />operating worldwide.</h2>
          <p className="location-description">
            Our office sits on the Sea of Japan coast, just outside the auction hubs of Tokyo and Osaka. The location gives us faster turnaround on regional inventory and a network of suppliers that bigger-city operators don't have.
          </p>

          <div className="location-details">
            <div className="location-row">
              <i className="ti ti-map-pin" aria-hidden="true"></i>
              <div>
                <p className="location-row-label">Office</p>
                <p className="location-row-value">
                  Ichiyadori, Nyuzen,<br />
                  Shimoniikawa District,<br />
                  Toyama 939-0636, Japan
                </p>
              </div>
            </div>
            <div className="location-row">
              <i className="ti ti-clock" aria-hidden="true"></i>
              <div>
                <p className="location-row-label">Operating Hours</p>
                <p className="location-row-value">9:00 — 21:00 JST</p>
                <p className="location-row-note">Japan Standard Time · UTC+9</p>
              </div>
            </div>
            <div className="location-row">
              <i className="ti ti-world" aria-hidden="true"></i>
              <div>
                <p className="location-row-label">We Speak</p>
                <p className="location-row-value">English · Russian · Japanese</p>
                <p className="location-row-note">Reach us in whichever language is easiest for you</p>
              </div>
            </div>
          </div>
        </div>
        <div className="location-map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.0!2d137.51!3d36.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU1JzQ4LjAiTiAxMzfCsDMwJzM2LjAiRQ!5e0!3m2!1sen!2sjp!4v1!5m2!1sen!2sjp&q=Ichiyadori,Nyuzen,Toyama,Japan"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 'var(--radius)' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Japan Technology office location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}