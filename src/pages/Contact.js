import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-form-section">
          {submitted ? (
            <div className="contact-success">Thank you for reaching out! I'll get back to you soon.</div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="contact-submit">Send Message</button>
            </form>
          )}
        </div>
        <div className="calendly-section">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/jimmyvanlieu/30min"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;