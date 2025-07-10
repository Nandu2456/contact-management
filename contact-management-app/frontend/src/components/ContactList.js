import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts, onEdit, onView, onDelete }) => {
  if (contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div className="contact-card" key={contact._id}>
          <h3>{contact.firstName} {contact.lastName}</h3>
          <p><strong>Address:</strong> {contact.address}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <div className="button-group">
            <button className="view-btn" onClick={() => onView(contact)}>
              View
            </button>
            <button className="edit-btn" onClick={() => onEdit(contact)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => onDelete(contact._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
