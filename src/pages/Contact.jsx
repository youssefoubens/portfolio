import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import '../css/contact.css';

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-layout contact-animate">
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  );
};

export default Contact;