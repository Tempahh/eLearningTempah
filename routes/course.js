const express = require('express');
const Course = require('../models/Course');
const auth = require('../middleware/auth');
const {body, validationResult} = require('express-validator');

const router = express.Router();
router.post(
    '/',
    auth,
    [
        body('title').notEmpty().withMessage('Title is required'),
        body('description').notEmpty().withMessage('Description is required'),
        body('price').isNumeric().withMessage('Price must be a number'),
    ],
    async (req, res) => {
        try {
            if (req.user.role !== 'admin') {
                return res.status(403).json({ message: 'Unauthorized' });
            }

            // Validate request body
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            // Create & save course
            const course = new Course(req.body);
            await course.save();

            res.status(201).json({ message: 'Course created successfully', course });
        } catch (error) {
            console.error('Error creating course:', error);
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }
);
