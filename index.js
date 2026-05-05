const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride=require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


app.listen(8080, () => { console.log("server is listening on posrt 8080") });

app.get("/", (req, res) => { res.send("root is working") });

//Connecting Db and backend

main().then(() => { console.log("connection successful"); }).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    //using whatsapp database

};
//Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
});

//New chat Route - has two routes one for write new chat other to show new chat on ui

app.get("/chats/new", (req, res) => { res.render("new.ejs"); })

app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;
    //creating new document to db using model
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });

    newChat.save()
        .then((res) => { console.log("chat was Saved") })
        .catch((err) => { console.log(err) });

    console.log(newChat);
    res.redirect("/chats");

})

//edit route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat })
});

//Update Route
app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedchat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true},{ returnDocument: "after" });
    console.log(updatedchat);
    res.redirect("/chats");
})
//do it by yourself that store time when u updated in schems use updated_at

//destroy route
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let deleted_chat=await Chat.findByIdAndDelete(id);
    console.log(deleted_chat);
    res.redirect("/chats");
})

