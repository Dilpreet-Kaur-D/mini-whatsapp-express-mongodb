const mongoose = require("mongoose");

//creating Schema

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        maxlength: 50
    },
    created_at: {
        type: Date,
        required: true
    }

});

//Creating Model means Collection
const Chat=mongoose.model("Chat",chatSchema);
module.exports=Chat;