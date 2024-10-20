const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Student = require('../models/students');

const validateRequest = (fields, reqBody) => {
    return fields.every(field => reqBody[field] && reqBody[field].trim() !== '');
};

const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const registerStudent = async (req, res) => {
    const requiredFields = ['fname', 'lname', 'email', 'password', 'role', 'department'];

    if (!validateRequest(requiredFields, req.body)) {
        return res.status(400).json({ error: 'All parameters required' });
    }

    try {
        const { fname, lname, email, password, role, department, year, phonenumber } = req.body;

        // Check if the student already exists
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new student
        const newStudent = new Student({
            fname,
            lname,
            email,
            password: hashedPassword,
            role,
            department,
            year,
            phonenumber
        });

        // Save the new student to the database
        await newStudent.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error.message);
        res.status(500).json({ error: 'Server error. Please try again.' });
    }
};



const loginStudent = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!validateRequest(['email', 'password'], req.body)) {
            return res.status(400).json({ error: 'All parameters required' });
        }

        const student = await Student.findOne({ email });
        if (!student) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = generateToken(student._id, 'student');
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error. Please try again.' });
    }
};

const administratorsLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!validateRequest(['email', 'password'], req.body)) {
            return res.status(400).json({ error: 'All parameters required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = generateToken(user._id, user.role);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error. Please try again.' });
    }
};

module.exports = {
    registerStudent,
    loginStudent,
    administratorsLogin
};
