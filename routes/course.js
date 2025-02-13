const express = require('express');
const Course = require('../models/Course');
const auth = require('../middleware/auth');
const {body, validationResult} = require('express-validator');

const router = express.Router();

// Create a new course
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

//update course
router.put("/:id", auth, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        course.set(req.body);
        await course.save();

        res.json({ message: 'Course updated successfully', course });
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

//delete course
router.delete("/:id", auth, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        await course.remove();

        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

//enroll in course
router.post("/:id/enroll", auth, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        if (course.students.includes(req.user._id)) {
            return res.status(400).json({ message: 'Already enrolled' });
        }

        course.students.push(req.user._id);
        await course.save();

        res.json({ message: 'Enrolled successfully', course });
    } catch (error) {
        console.error('Error enrolling in course:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});
