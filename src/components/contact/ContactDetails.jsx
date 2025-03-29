import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
  {
    id: 1,
    name: 'Mohammedia, Morocco',
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: 'benou5294@gmail.com',
    icon: <FiMail />,
  },
  {
    id: 3,
    name: '+212 654823654',
    icon: <FiPhone />,
  },
];

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <div className="contact-details-content">
        <h2 className="contact-details-title">Contact details</h2>
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li className="contact-item" key={contact.id}>
              <i className="contact-icon">{contact.icon}</i>
              <span className="contact-text">{contact.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;