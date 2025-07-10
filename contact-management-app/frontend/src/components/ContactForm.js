import React, { useState, useEffect } from 'react';
import './ContactForm.css';

const ContactForm = ({ onSubmit, initialContact, isEditing, setIsEditing }) => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (isEditing && initialContact && initialContact._id) {
      setContact(initialContact);
      console.log("Loaded initialContact for editing:", initialContact);
    }
  }, [isEditing, initialContact]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitting contact:', contact);

    if (isEditing && !initialContact?._id) {
      alert('No contact selected for editing!');
      return;
    }

    onSubmit(contact);

    if (!isEditing) {
      setContact({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phone: ''
      });
    }
  };

  return (
    <div className="contact-form">
      <h2>{isEditing ? 'Edit Contact' : 'Add Contact'}</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
          required
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={contact.address}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          required
        />

        <div className="button-group">
          <button type="submit" className="submit-btn">
            {isEditing ? 'Update Contact' : 'Add Contact'}
          </button>

          {isEditing && (
            <button
              type="button"
              className="cancel-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
