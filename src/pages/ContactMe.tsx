import React from 'react';
import './ContactMe.css';
import profilePic from '../images/shivaji.jpg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';

// Hardcoded contact data
const contactData = {
  name: "Shaik Shivaji",
  title: "Software Development and AI/ML Engineer",
  summary: "Have personal experience in software development and AI and ML models testing and training",
  companyUniversity: "IIIT Kottayam",
  email: "shaikshivaji123@gmail.com",
  phoneNumber: "+91 8341868519",
  linkedinLink: "https://www.linkedin.com/in/shivaji-shaik-b92b19270/"
};

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Shaik Shivaji" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{contactData.name}</h3>
          <p className="badge-title">{contactData.title}</p>
          <p className="badge-description">
            {contactData.summary}
          </p>
          <p className="badge-company">{contactData.companyUniversity}</p>
          <a
            href={contactData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${contactData.email}`} className="contact-link">
            {contactData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${contactData.phoneNumber}`} className="contact-link">
            {contactData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

