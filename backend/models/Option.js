const mongoose = require('mongoose')
const OptionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    votes: {
        type: [String],
    }
})
module.exports = mongoose.model("Option", OptionSchema);