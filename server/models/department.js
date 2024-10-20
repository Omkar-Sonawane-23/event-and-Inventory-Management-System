const mongoose = require('mongoose');
const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    departmentResourceList: [
        {
            nameOfResource: {
                type: String,
            },
            availableResources: {
                type: Number,
            },
            useDetails: [
                {
                    bookedFor: {
                        type: mongoose.Schema.Types.ObjectId,
                    }
                }
            ]
        }
    ]
});
module.exports = mongoose.model('Department', departmentSchema);