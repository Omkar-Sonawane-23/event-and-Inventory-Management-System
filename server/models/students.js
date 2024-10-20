const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
},{ timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
