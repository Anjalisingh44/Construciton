const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth');

// @route   POST api/messages
// @desc    Post a message
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
        const newMessage = new Message({ name, email, phone, message });
        const savedMessage = await newMessage.save();
        res.json(savedMessage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET api/messages
// @desc    Get all messages
// @access  Private (Admin)
router.get('/', auth, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(401).json({ msg: 'Not authorized' });

    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
