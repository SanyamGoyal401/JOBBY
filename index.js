const express = require('express');
require('./db/config');


const app = express();

require('dotenv').config();
app.get('/', (req, res) => {
    res.send("HOME PAGE");
})
app.get('/check', (req, res) => {
    res.send("STATUS OK, SERVER IS UP");
})


app.listen(3000, (err)=>{
    if(err)console.log(err);
    else{
        console.log("STATUS OK");
    }
})