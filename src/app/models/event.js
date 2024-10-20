const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['approval pending', 'approved', 'rejected', 'completed'],
        default: 'approval pending'
    },
    reject: [
        {
            rejectedBy: {
                type: mongoose.Schema.Types.ObjectId,
            },
            rejectReason: {
                type: String,
            }
        }
    ],
    requestesResources: [
        {
            resourceName: {
                type: String,
            },
            requestedToDepartment: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Departments'
            }
        }
    ],
    organizerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
    { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
