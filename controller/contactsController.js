const Contacts = require('../models/Contacts.js')

const getContacts = async (req,res) => {
    try {
        const contacts = await Contacts.findAll()
        res.status(200).json(contacts)
    } catch (error) {
        res.status(500).json('Err', error.message)
    }
}

const createContact = async(req,res) => {
    try {
        const newContact = await Contacts.create({
            name:req.body.name,
            surname:req.body.surname,
            email:req.body.email,
            date_of_birth:req.body.date_of_birth
        })
        res.status(201).json(newContact)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getContact = async(req,res) => {
    try {
    const contact = await Contacts.findByPk(req.params.id)
    if (contact) {
        res.status(200).json(contact);
    } else {
        res.status(404).json({ message: 'Contact not found' });
    }
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

const updateContact = async(req,res) => {
    try {
        const contact = await Contacts.findByPk(req.params.id)
        if (contact) {
            await contact.update({
                name:req.body.name,
                surname:req.body.surname,
                email:req.body.email,
                date_of_birth:req.body.date_of_birth
            });
            res.status(200).json(contact);
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteContact = async(req,res) => {
    try {
        const contact = await Contacts.findByPk(req.params.id);
        if (contact) {
            await contact.destroy();
            res.status(200).json({ message: 'Contact deleted successfully' });
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}