import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState("");

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

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...form,
      }).toString(),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        setStatus("success");
        setForm({ name: "", email: "", message: "", consent: false });
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus("error");
      });
  };

  return (
    <section className="contact-section">
      <h3 className="contact-title">Contact Me</h3>

      {status === "success" && (
        <div className="contact-success">
          <p>Thank you for your message! I will get back to you soon.</p>
        </div>
      )}

      {status === "error" && (
        <div className="contact-error">
          <p>Sorry, there was an error. Please try again.</p>
        </div>
      )}

      {status !== "success" && (
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

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
              of this website.
            </label>
          </div>
          <div className="shane_tm_button">
            <button
              type="submit"
              className="shane_tm_button"
              style={{
                border: "none",
                cursor: "pointer",
                padding: 0,
                backgroundColor: "transparent",
              }}
            >
              <span className="button-text">Send Message</span>
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
