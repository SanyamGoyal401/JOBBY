require("./db/config");
const express = require("express");
const cors = require('cors');
const Job = require("./db/schema_models/jobSchema");
const app = express();
app.use(cors());
const login_register_route = require("./routes/login_register/register_login");
const addJobRoute = require("./routes/jobs/addJob");
const getJobRoute = require("./routes/jobs/getJobs");
const editJobRoute = require("./routes/jobs/editJob");

const PORT = process.env.PORT || 3000;
require("dotenv").config();

app.use(login_register_route);
app.use("/job",addJobRoute);
app.use("/job",getJobRoute);
app.use("/job",editJobRoute);



app.get("/", (req, res) => {
  res.send("HOME PAGE");
});


app.get("/check", (req, res) => {
  res.send("STATUS OK, SERVER IS UP");
});

app.use((err, req, res, next)=>{

});


app.listen(PORT, (err) => {
  if (err) console.log(err);
  else {
    console.log("STATUS OK");
  }
});
