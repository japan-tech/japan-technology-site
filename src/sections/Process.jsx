import './Process.css';

const STEPS = [
  {
    number: '01',
    icon: 'ti-message-circle',
    title: 'Tell Us What You Want',
    description: 'Send us a message in English, Russian, or Japanese with what you\'re looking for. The more detail, the better — make, model, year, condition, budget.',
  },
  {
    number: '02',
    icon: 'ti-search',
    title: 'We Source It',
    description: 'We search Japanese auctions, dealers, and our private network. You\'ll receive options with photos, condition reports, and total cost (purchase + service + shipping).',
  },
  {
    number: '03',
    icon: 'ti-truck-delivery',
    title: 'We Ship It',
    description: 'Once you confirm, we handle the purchase, export documentation, and international shipping. You receive tracking updates and your item at your door.',
  },
];

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-inner">
        <div className="process-header">
          <p className="eyebrow">How It Works</p>
          <h2 className="section-title">Three steps,<br />from Japan to you.</h2>
        </div>
        <div className="process-grid">
          {STEPS.map((step, i) => (
            <div className="process-step" key={step.number}>
              <div className="process-step-icon">
                <i className={`ti ${step.icon}`} aria-hidden="true"></i>
              </div>
              <p className="process-step-number">Step {step.number}</p>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-description">{step.description}</p>
              {i < STEPS.length - 1 && (
                <div className="process-step-connector" aria-hidden="true">
                  <i className="ti ti-arrow-right"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}