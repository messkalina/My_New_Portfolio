import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        setStatus("success");
        form.reset();
      })
      .catch((error) => {
        setStatus("error");
        console.error(error);
      });
  };

  return (
    <div className="contact-section">
      <h3 className="contact-title">Get in Touch</h3>

      {status === "success" && (
        <div className="contact-success">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="contact-error">
          Sorry, there was an error. Please try again.
        </div>
      )}

      {status !== "success" && (
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Hidden input required for Netlify forms */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <div className="form-group consent-group">
            <input type="checkbox" id="consent" name="consent" required />
            <label htmlFor="consent" className="consent-label">
              I agree to have my data stored and processed for the purpose of
              this contact request.
            </label>
          </div>

          <div className="shane_tm_button">
            <button type="submit" className="white-fill-bg btn-outline">
              <span className="button-text">Send Message</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
