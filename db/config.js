const mongoose = require("mongoose");

require("dotenv").config();
const uri =
  "mongodb+srv://" +
  process.env.DB_USERNAME +
  ":" +
  process.env.DB_PASS +
  "@cluster0.o5pps5r.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((response)=>{
  console.log("DB CONNECTED");
}).catch((err) => console.log("DB NOT CONNECTED"));