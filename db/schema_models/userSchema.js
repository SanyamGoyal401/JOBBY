const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "recruiter", "applicant"],
    default: "applicant",
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
});


//hash passwords using bcrypt
userSchema.pre('save',async function(next){
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
})

userSchema.methods.generateAuthToken = async function (){
  try{
    let token = jwt.sign({_id:this._id.toString()}, process.env.SEC_KEY, {expiresIn: '10000s'});
    this.token = token;
    await this.save();
    return token;
  }
  catch(err){
    console.log(err);
  }
}


const User = mongoose.model("User", userSchema);
module.exports = User;