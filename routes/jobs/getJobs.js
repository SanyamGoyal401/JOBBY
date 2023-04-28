const express = require('express');
const mongoose = require('mongoose');
const Job = require('../../db/schema_models/jobSchema');
const getJobRoute = express();

getJobRoute.get("/all", async(req, res)=>{
    let skills =  req.body.skills;
    console.log(skills)
    const jobs = await Job.find({skills_required:{$elemMatch:{$in: skills}}})
    res.status(200).json({jobs: jobs});
});
getJobRoute.get("/id/:id", async(req, res)=>{
    const job = await Job.findOne({_id: new mongoose.Types.ObjectId(req.params.id)});
    res.status(200).json({job: job});
})
module.exports = getJobRoute;