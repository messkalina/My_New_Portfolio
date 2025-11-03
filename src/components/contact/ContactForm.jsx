import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {};

    // Convert form data to object
    new FormData(form).forEach((value, key) => {
      formData[key] = value;
    });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
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
          name="contact"
          method="post"
          action="/thank-you/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>

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
