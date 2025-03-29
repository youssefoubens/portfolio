import { useState } from 'react';
import FormInput from '../reusable/FormInput';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_2eqsr2f',
        'template_psksleq',
        e.target,
        'tXbHnBytnC-K1fnUQ'
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => alert('Failed to send message'))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="contact-form-section">
      <form onSubmit={handleSubmit} className="contact-form-container">
        <h2 className="contact-form-title">Contact Me</h2>

        <div className="form-group form-group-row">
          <div className="form-group-inner">
            <FormInput
              inputLabel="Name"
              labelFor="name"
              inputType="text"
              inputId="name"
              inputName="name"
              placeholderText="Your Name"
              ariaLabelName="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group-inner">
            <FormInput
              inputLabel="Email"
              labelFor="email"
              inputType="email"
              inputId="email"
              inputName="email"
              placeholderText="Your Email"
              ariaLabelName="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-input form-textarea"
            id="message"
            name="message"
            placeholder="Your Message"
            aria-label="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <svg
            className="submit-btn-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;