const mongoose = require('mongoose')
const UserSchema = new mongoose({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
    },
    queries: [{
        type: Schema.Types.ObjectId,
        ref: 'Query',
    }],
},
    {
        timestamps: true
});
module.exports = mongoose.model("User", UserSchema);