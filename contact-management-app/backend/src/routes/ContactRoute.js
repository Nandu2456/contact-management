const express = require('express');
const router = express.Router();
const Contact = require('../../models/Contact');

// GET all contacts
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (contacts.length === 0) {
      return res.status(200).json({ message: "No contacts available" });
    }
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (contacts.length === 0) {
      return res.status(200).json({ message: "No contacts available" });
    }
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
   console.log("REQ BODY:", req.body);
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// GET contact by ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// PUT update contact
router.put('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    Object.assign(contact, req.body);
    await contact.save();
    res.json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE contact
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    await contact.deleteOne();
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
