import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) return;
    // TODO: handle sending the form (API, Email, etc)
    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      {submitted ? (
        <div className="contact-success">
          <p>Thank you for your message! I will get back to you soon.</p>
        </div>
      ) : (
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              rows={5}
            />
          </div>
          <div className="form-group consent-group">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              checked={form.consent}
              onChange={handleChange}
            />
            <label htmlFor="consent" className="consent-label">
              By sending this message, I agree to the processing of my personal
              data in accordance with the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy policy
              </a>{" "}
              of this website. I am aware that my data will be used solely for
              the purpose of responding to my enquiry.{" "}
              {/* <span style={{ color: "#f52225" }}>*</span> */}
            </label>
          </div>
         <div className="tokyo_tm_button">
  <button type="submit" className="white-fill-bg fill-black">
    Send Message
  </button>
</div>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
