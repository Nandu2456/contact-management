import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import axios from 'axios';

const EditContactWrapper = ({ onSubmit, setIsEditing }) => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/contacts/${id}`);
        setContact(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchContact();
  }, [id]);

  if (!contact) return <p>Loading contact...</p>;

  return (
    <ContactForm
      onSubmit={(data) => onSubmit(id, data)}
      initialContact={contact}
      isEditing={true}
      setIsEditing={setIsEditing}
    />
  );
};

export default EditContactWrapper;
