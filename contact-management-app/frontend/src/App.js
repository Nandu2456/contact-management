import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactView from './components/ContactView';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import EditContactWrapper from './EditContactWrapper';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contacts');
      setContacts(response.data);
    } catch (err) {
      toast.error('Error fetching contacts');
    }
  };

  const handleAddContact = async (contact) => {
    try {
      const response = await axios.post('http://localhost:5000/api/contacts', contact);
      setContacts([...contacts, response.data]);
      toast.success('Contact added successfully');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error adding contact');
    }
  };

  const handleUpdateContact = async (id, updatedContact) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/contacts/${id}`, updatedContact);
      setContacts(contacts.map(c => c._id === id ? response.data : c));
      toast.success('Contact updated successfully');
      setIsEditing(false);
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error updating contact');
    }
  };

  const handleDeleteContact = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await axios.delete(`http://localhost:5000/api/contacts/${id}`);
        setContacts(contacts.filter(c => c._id !== id));
        toast.success('Contact deleted successfully');
      } catch (err) {
        toast.error('Error deleting contact');
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Management App</h1>
      <Navbar />
      <Routes>
        <Route
          path="/contacts"
          element={
            <ContactList
              contacts={contacts}
              onEdit={(contact) => {
                setSelectedContact(contact);
                setIsEditing(true);
                navigate(`/edit/${contact._id}`);
              }}
              onView={(contact) => {
                setSelectedContact(contact);
                setIsViewing(true);
              }}
              onDelete={handleDeleteContact}
            />
          }
        />
        <Route
          path="/add"
          element={
            <ContactForm
              onSubmit={handleAddContact}
              initialContact={{}}
              isEditing={false}
              setIsEditing={setIsEditing}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditContactWrapper
              onSubmit={handleUpdateContact}
              setIsEditing={setIsEditing}
            />
          }
        />
      </Routes>
      {isViewing && selectedContact && (
        <ContactView
          contact={selectedContact}
          onClose={() => setIsViewing(false)}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;  