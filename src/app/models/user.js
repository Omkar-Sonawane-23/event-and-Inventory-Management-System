const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin','Department', 'Faculty', 'HOD', 'Club Lead'],
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
