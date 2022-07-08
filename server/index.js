const express=require("express");
const app=express();
const mongoose=require("mongoose")
const UserModel=require("./models/Cat");
const cors = require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://bhanuylm:bhanu123@clusterbhanu.xpvzdru.mongodb.net/letstry?retryWrites=true&w=majority"
);


app.get("/getdata",(request,response)=>{
  UserModel.find({}, (err, result) => {
    if (err) {
      response.json(err);
    } else {
      response.json(result);
    }
  });

})
app.listen(3005,()=>{
  console.log("ok")
})