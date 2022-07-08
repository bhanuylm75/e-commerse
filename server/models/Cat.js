const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  items:{
    type:Array,
    required:true
  }

  
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;