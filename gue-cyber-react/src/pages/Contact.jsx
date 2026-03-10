import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) nextErrors.email = "Email is required.";
    if (formData.email.trim() && !emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.service) nextErrors.service = "Select a service.";
    if (!formData.message.trim()) nextErrors.message = "Please share your project context.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setSubmitMessage("");
      return;
    }

    setSubmitMessage("Thanks. Your request has been submitted. Our team will contact you shortly.");
    setFormData({
      fullName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <main>
      <section className="contact-page">
        <img className="contact-bg" src="/images/contact-waves-bg-lime-half.png" alt="" />

        <div className="contact-wrap">
          <div className="contact-center">
            <div className="contact-header reveal-up">
              <h1 className="contact-title">Contact us</h1>
              <p className="contact-subtitle">We are here to help you make a first move to greener choice.</p>
            </div>

            <div className="contact-card reveal-up delay-1">
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-group">
                  <label className="contact-label" htmlFor="fullName">Full Name</label>
                  <input
                    className={`contact-input ${errors.fullName ? "error" : ""}`}
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange("fullName")}
                  />
                  {errors.fullName ? <p className="contact-error">{errors.fullName}</p> : null}
                </div>

                <div className="contact-group">
                  <label className="contact-label" htmlFor="email">Email</label>
                  <input
                    className={`contact-input ${errors.email ? "error" : ""}`}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange("email")}
                  />
                  {errors.email ? <p className="contact-error">{errors.email}</p> : null}
                </div>

                <div className="contact-group">
                  <label className="contact-label" htmlFor="company">
                    <span>Company</span> <span className="contact-label-muted">(optional)</span>
                  </label>
                  <input
                    className="contact-input"
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange("company")}
                  />
                </div>

                <div className="contact-group">
                  <label className="contact-label" htmlFor="service">Service</label>
                  <select
                    className={`contact-select ${errors.service ? "error" : ""}`}
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange("service")}
                  >
                    <option value="">Select service</option>
                    <option value="assessment">Security Assessment</option>
                    <option value="cloud">Cloud Hardening</option>
                    <option value="incident">Incident Response</option>
                    <option value="advisory">Advisory & Governance</option>
                  </select>
                  {errors.service ? <p className="contact-error">{errors.service}</p> : null}
                </div>

                <div className="contact-group">
                  <label className="contact-label" htmlFor="message">Message</label>
                  <input
                    className={`contact-input ${errors.message ? "error" : ""}`}
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange("message")}
                  />
                  {errors.message ? <p className="contact-error">{errors.message}</p> : null}
                </div>

                {submitMessage ? <div className="contact-success">{submitMessage}</div> : null}

                <button type="submit" className="contact-submit">
                  <span>Submit</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
