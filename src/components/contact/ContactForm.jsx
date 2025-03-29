import { useState } from 'react';

import FormInput from '../reusable/FormInput';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_2eqsr2f',
      'template_psksleq',
      e.target,
      'tXbHnBytnC-K1fnUQ'
    )
    .then(() => {
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    })
    .catch(() => alert('Failed to send message'));
  };

  return (
    <div className="contact-form-section">
      <form onSubmit={handleSubmit} className="contact-form-container">
        <p className="contact-form-title">Contact Form</p>
        
        <div className="form-group">
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-input form-textarea"
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;