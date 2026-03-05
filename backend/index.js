const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://homebizz-frontend.onrender.com',
        /\.onrender\.com$/,
        /\.cloudflare\.com$/,
        // Add your custom domain below (replace with your actual domain)
        'https://www.homebizz.com',
        'https://homebizz.com'
    ],
    credentials: true
}));
app.use(morgan('dev'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/homebizz')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/project'));
app.use('/api/messages', require('./routes/message'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('SERVER ERROR DETAILS:', err);
    if (err.name === 'MulterError' || err.cloudinary) {
        return res.status(400).json({
            msg: 'Image upload failed. Please check your Cloudinary credentials.',
            error: err.message
        });
    }
    res.status(500).json({ msg: 'Server error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
