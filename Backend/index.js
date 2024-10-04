const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const request = require("request");
const https = require("https");
const bcrypt = require("bcrypt");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const dbModel = require("../Backend/dbmodel.js");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(bodyparser.json());



const uri = "mongodb+srv://Sudhanshu:" +"Sudhanshu12345" +"@keepdata.gf6o0ud.mongodb.net/"+"MYDB"+"?retryWrites=true&w=majority";

mongoose.connect(uri, {});



app.get("/",async (req,res) => {

 await dbModel.find()
  .then(doc => {
    console.log(doc);
  res.send(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  });

});

app.post("/create", (req,res)=> {

  const newCharacter = new dbModel({
   title : req.body.title,
   content : req.body.content
  });

  if(req.body.title != '')
   newCharacter.save();
  
 });

 app.delete("/delete/:id",(req,res)=> {

  const id = req.params.id;
  dbModel.findByIdAndDelete(id).then(
    character => console.log(`Successfully deleted ${id}`)
    ).catch((err)=>{
console.log(err);
    });

 });


app.put("/edit",(req,res)=> {

const id = req.body.id;

console.log(req.body.title);

dbModel.findByIdAndUpdate(id,{
  title : req.body.title,
  content: req.body.content
}).then((res) => {
console.log("Successfully Update");
}).catch((err) => {
  console.log(err);
});

});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


//Sudhanshu
//Sudhanshu12345
//mongodb+srv://Sudhanshu:<password>@keepdata.gf6o0ud.mongodb.net/?retryWrites=true&w=majority