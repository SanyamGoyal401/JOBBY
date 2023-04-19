const express = require('express');
require('./db/config');
const User = require('./db/schema_models/userSchema');
const Job = require('./db/schema_models/jobSchema');
const app = express();


const PORT = process.env.PORT || 3000;
require('dotenv').config();
app.get('/', (req, res) => {
   
    res.send("HOME PAGE");
})
app.get('/check', (req, res) => {
    res.send("STATUS OK, SERVER IS UP");
})


app.listen(PORT, (err)=>{
    if(err)console.log(err);
    else{
        console.log("STATUS OK");
    }
})