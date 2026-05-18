import './Services.css';

const SERVICES = [
  {
    icon: 'ti-car',
    title: 'Cars',
    description: 'Any vehicle available in Japan — from vintage JDM icons to modern performance cars to everyday daily drivers. If it\'s listed at a Japanese auction or dealer, we can source it for you.',
    highlights: ['Auction & dealer sourcing', 'Export documentation', 'Worldwide shipping'],
  },
  {
    icon: 'ti-anchor',
    title: 'Boats',
    description: 'Japanese-domestic-market boats are some of the best-built in the world. We source any make and model available in Japan, handle export paperwork, and arrange international shipping.',
    highlights: ['Yamaha, Toyota Marine, and more', 'Inspection & documentation', 'Container or RoRo shipping'],
  },
  {
    icon: 'ti-settings',
    title: 'JDM Parts',
    description: 'OEM replacements, performance upgrades, and rare discontinued parts. Our network with Japanese vendors gives access to parts you won\'t find outside Japan.',
    highlights: ['OEM & aftermarket', 'Engines, transmissions, body', 'Rare & discontinued items'],
  },
  {
    icon: 'ti-package',
    title: 'Custom Requests',
    description: 'Looking for something specific that isn\'t a car, boat, or part? Tell us what you want and we\'ll find it. From collectibles to equipment to one-of-a-kind items.',
    highlights: ['Anything from Japan', 'Personalized sourcing', 'Quote on request'],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-header">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title">Sourcing from Japan,<br />delivered worldwide.</h2>
          <p className="section-sub">
            Four core services — but the principle is the same for every one: tell us what you want, we'll find it, and we'll handle everything from purchase to your door.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className="service-card" key={s.title} style={{ animationDelay: `${i * 80}ms` }}>
              <div className="service-icon">
                <i className={`ti ${s.icon}`} aria-hidden="true"></i>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-description">{s.description}</p>
              <ul className="service-highlights">
                {s.highlights.map(h => (
                  <li key={h}>
                    <i className="ti ti-check" aria-hidden="true"></i> {h}
                  </li>
                ))}
              </ul>
              <a href="#request" className="service-link">
                Request this service <i className="ti ti-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}