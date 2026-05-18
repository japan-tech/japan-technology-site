import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-text">
          <p className="eyebrow">About Us</p>
          <h2 className="section-title">Started by enthusiasts.<br />Built on relationships.</h2>
          <p className="about-paragraph">
            Japan Technology started with a simple idea: live in Japan, work on cars, and help others around the world get the vehicles and parts they love. We came together as friends, moved to Japan to immerse ourselves in JDM culture, and turned that passion into a business that's been running since 2007.
          </p>
          <p className="about-paragraph">
            Nearly two decades later, we still feel like the same group of car enthusiasts — just with a much deeper network of dealers, auction contacts, and shipping partners across Japan.
          </p>
        </div>
        <div className="about-pillars">
          <div className="pillar">
            <div className="pillar-icon">
              <i className="ti ti-calendar-stats" aria-hidden="true"></i>
            </div>
            <h3 className="pillar-title">19 Years in Business</h3>
            <p className="pillar-text">Since 2007. We've watched the JDM scene grow and built relationships that took years to earn.</p>
          </div>
          <div className="pillar">
            <div className="pillar-icon">
              <i className="ti ti-message-language" aria-hidden="true"></i>
            </div>
            <h3 className="pillar-title">Trilingual Support</h3>
            <p className="pillar-text">We communicate fluently in English, Russian, and Japanese — direct, no translation middlemen.</p>
          </div>
          <div className="pillar">
            <div className="pillar-icon">
              <i className="ti ti-map-pin" aria-hidden="true"></i>
            </div>
            <h3 className="pillar-title">Based in Toyama</h3>
            <p className="pillar-text">Off the beaten path of Tokyo and Osaka. Closer to suppliers, faster turnaround, lower handling fees.</p>
          </div>
        </div>
      </div>
    </section>
  );
}