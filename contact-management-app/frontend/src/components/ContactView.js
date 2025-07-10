import React from 'react';
import './ContactView.css';

const ContactView = ({ contact, onClose }) => {
  return (
    <div className="contact-view-overlay">
      <div className="contact-view-container">
        <h2>Contact Details</h2>
        <p><strong>First Name:</strong> {contact.firstName}</p>
        <p><strong>Last Name:</strong> {contact.lastName}</p>
        <p><strong>Address:</strong> {contact.address}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactView;
