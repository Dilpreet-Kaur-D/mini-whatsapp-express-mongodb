
//to initialize database with some data
const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
    .then(() => { console.log("connection successful"); })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    //using whatsapp database

};
const allchats = [
  {
    from: "Ridhi",
    to: "Dil",
    msg: "send me your answer sheet also pls 😭",
    created_at: new Date()
  },
  {
    from: "Dil",
    to: "Ridhi",
    msg: "ok wait, sending in 5 minutes",
    created_at: new Date()
  },
  {
    from: "Aman",
    to: "Ridhi",
    msg: "are you coming to class today?",
    created_at: new Date()
  },
  {
    from: "Ridhi",
    to: "Aman",
    msg: "yes, but I’ll be late",
    created_at: new Date()
  },
  {
    from: "Neha",
    to: "Dil",
    msg: "did you complete the assignment?",
    created_at: new Date()
  },
  {
    from: "Dil",
    to: "Neha",
    msg: "almost done, just revising",
    created_at: new Date()
  },
  {
    from: "Rohit",
    to: "Ridhi",
    msg: "send yesterday’s PPT",
    created_at: new Date()
  },
  {
    from: "Ridhi",
    to: "Rohit",
    msg: "check WhatsApp group",
    created_at: new Date()
  }
];

Chat.insertMany(allchats);
