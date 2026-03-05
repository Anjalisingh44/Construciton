const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/auth');
const upload = require('../middleware/cloudinary');

// @route   GET api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/projects
// @desc    Create a project
// @access  Private (Admin)
router.post('/', auth, (req, res, next) => {
    console.log('--- Incoming POST /api/projects ---');
    console.log('Headers:', req.headers);
    next();
}, upload.single('image'), async (req, res) => {
    const { title, description, category, details, location } = req.body;
    if (req.user.role !== 'admin') return res.status(401).json({ msg: 'Not authorized' });

    try {
        const imageUrl = req.file ? req.file.path : '';
        const newProject = new Project({
            title,
            description,
            category,
            image: imageUrl,
            details,
            location
        });
        const project = await newProject.save();
        res.json(project);
    } catch (err) {
        console.error('Project Create Error:', err);
        res.status(500).json({ msg: 'Server error while creating project', error: err.message });
    }
});

// @route   PUT api/projects/:id
// @desc    Update a project
// @access  Private (Admin)
router.put('/:id', auth, upload.single('image'), async (req, res) => {
    const { title, description, category, details, location } = req.body;
    if (req.user.role !== 'admin') return res.status(401).json({ msg: 'Not authorized' });

    try {
        let project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ msg: 'Project not found' });

        const updateData = { title, description, category, details, location };
        if (req.file) {
            updateData.image = req.file.path;
        }

        project = await Project.findByIdAndUpdate(req.params.id,
            { $set: updateData },
            { new: true });
        res.json(project);
    } catch (err) {
        console.error('Put Error:', err);
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
});

// @route   DELETE api/projects/:id
// @desc    Delete a project
// @access  Private (Admin)
router.delete('/:id', auth, async (req, res) => {
    // ... existing code ...
    if (req.user.role !== 'admin') return res.status(401).json({ msg: 'Not authorized' });

    try {
        let project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ msg: 'Project not found' });

        await Project.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Project removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
