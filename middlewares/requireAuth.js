const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../db/schema_models/userSchema');
require('dotenv').config();

const requireAuth = async(req, res, next)=>{
    const token = req.header('Authentication');

    if(!token){
        return res.status(401).json({message: "unauthorized"});
    }
    try{
        const decoded = jwt.verify(token, process.env.SEC_KEY)
        const user = await User.findOne({_id: new mongoose.Types.ObjectId(decoded._id.toString())});
        req.body = {
            ...req.body,
            recruiterName: user.name,
        }
        next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json({message: 'unauthorized'});
    }
}

module.exports = requireAuth;