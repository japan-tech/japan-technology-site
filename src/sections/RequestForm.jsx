import { useState } from 'react';
import './RequestForm.css';

const WEB3FORMS_ACCESS_KEY = 'cf1b80e3-b929-466d-a839-abed3ea99cb1';

const SERVICE_OPTIONS = [
  { value: 'cars',    label: 'Cars' },
  { value: 'boats',   label: 'Boats' },
  { value: 'parts',   label: 'JDM Parts' },
  { value: 'custom',  label: 'Custom Request' },
];

const CONTACT_PREFERENCES = [
  { value: 'email',     label: 'Email' },
  { value: 'whatsapp',  label: 'WhatsApp' },
  { value: 'instagram', label: 'Instagram DM' },
];

export default function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'cars',
    details: '',
    contactPref: 'email',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const serviceLabel = SERVICE_OPTIONS.find(s => s.value === formData.service)?.label || formData.service;
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Request: ${serviceLabel} — ${formData.name}`,
      from_name: 'Japan Technology Website',
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '(not provided)',
      service: serviceLabel,
      contact_preference: CONTACT_PREFERENCES.find(c => c.value === formData.contactPref)?.label,
      details: formData.details,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: 'cars', details: '', contactPref: 'email' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Submission failed. Please try again or contact us directly.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again, or contact us directly.');
    }
  }

  return (
    <section className="request-section" id="request">
      <div className="request-inner">
        <div className="request-intro">
          <p className="eyebrow">Request a Service</p>
          <h2 className="section-title">Tell us what you're<br />looking for.</h2>
          <p className="section-sub">Fill out the form with as much detail as you can — make, model, year, condition, budget. We'll reply within 24 hours with options or follow-up questions.</p>
          <div className="request-direct">
            <p className="request-direct-label">Prefer direct contact?</p>
            <a href="mailto:contact@japan-technology.com" className="request-direct-link"><i className="ti ti-mail" aria-hidden="true"></i> contact@japan-technology.com</a>
            <a href="https://wa.me/79147903057" target="_blank" rel="noopener noreferrer" className="request-direct-link"><i className="ti ti-brand-whatsapp" aria-hidden="true"></i> WhatsApp (any language)</a>
          </div>
        </div>

        <form className="request-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-field">
              <span className="form-label">Your Name *</span>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Smith" />
            </label>
            <label className="form-field">
              <span className="form-label">Email *</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
            </label>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span className="form-label">Phone / WhatsApp (optional)</span>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 555 123 4567" />
            </label>
            <label className="form-field">
              <span className="form-label">Service *</span>
              <select name="service" value={formData.service} onChange={handleChange} required>
                {SERVICE_OPTIONS.map(opt => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
              </select>
            </label>
          </div>

          <label className="form-field">
            <span className="form-label">What are you looking for? *</span>
            <textarea name="details" value={formData.details} onChange={handleChange} required rows={6} placeholder="Example: 1995 Toyota Supra RZ, manual transmission, under 100,000 km, ideally in white or silver. Budget: 30,000-40,000 USD. Shipping to Cyprus." />
          </label>

          <label className="form-field">
            <span className="form-label">Preferred Contact Method *</span>
            <div className="radio-group">
              {CONTACT_PREFERENCES.map(opt => (
                <label key={opt.value} className="radio-label">
                  <input type="radio" name="contactPref" value={opt.value} checked={formData.contactPref === opt.value} onChange={handleChange} />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </label>

          {status === 'error' && (
            <div className="form-message form-message--error">
              <i className="ti ti-alert-circle" aria-hidden="true"></i> {errorMessage}
            </div>
          )}
          {status === 'success' && (
            <div className="form-message form-message--success">
              <i className="ti ti-circle-check" aria-hidden="true"></i>
              <span>Thanks — we received your request and will reply within 24 hours. Check your email for our response.</span>
            </div>
          )}

          <button type="submit" className="btn-primary form-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Submit Request'}
          </button>
        </form>
      </div>
    </section>
  );
}