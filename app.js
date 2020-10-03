//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/authDB", {useNewUrlParser: true, useUnifiedTopology: true});

const usersSchema = {
  email: String,
  password: String
};

const Users = mongoose.model("user", usersSchema);


app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/login", function(req,res){
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", function(req,res){
  const username = req.body.email;
    const password = req.body.password;

  user1.findOne({email: username}, function(err, foundUser){
    if(err){
      console.log(err);
    } else {
      if(foundUser){
        if(foundUser.password === password){
          res.render("secrets");
        }
      }
    }
  });
});























app.listen(3000 ,function(){
  console.log("Server started on port 3000");
});
