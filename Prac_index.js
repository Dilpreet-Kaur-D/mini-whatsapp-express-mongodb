const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');
//this helps to connect our js file with mongodb database through this link
//use line written below because mongoose.connet is an async function

main().then(() => { console.log("connection successful");
  runCRUD();
 })
  .catch(err => console.log(err));//for execution of main function which return promise

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true, unique: true
  },
  age: {
    type: Number,
    required: true
  }

})

const User=mongoose.model("User",userschema);
//now User is a class

//using User class we are going to create document which is object of this class
async function runCRUD() {
const users = [
    { username: "Dil", email: "dil1@yahoo.com", age: 19 },
    { username: "Aman", email: "aman@yahoo.com", age: 22 },
    { username: "Simran", email: "simran@yahoo.com", age: 21 }
  ];

  await User.insertMany(users);   

  const allUsers = await User.find();
  console.log(allUsers);
}