const mongoose = require('mongoose')
const QuerySchema = new mongoose.Schema({
    query: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    options: [{
        text: {
            type: String,
            required: true,
            trim: true
        },
        votes: {
            type: [String],
            default: []
        }
    }],
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    tags: [{
        type: String,
        enum: ['technology', 'politics', 'sports', 'entertainment']
    }]
},
    {
        timestamps: true

    });
module.exports = mongoose.model("Query", QuerySchema)