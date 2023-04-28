const express = require('express');
const Job = require('../../db/schema_models/jobSchema');
const mongoose = require('mongoose');
const editJobRoute = express();
const requireAuth = require('../../middlewares/requireAuth');
editJobRoute.use(express.json());

editJobRoute.post("/edit/:id",requireAuth, async(req, res)=>{
    const {updatedJob} = req.body;
    console.log(updatedJob);
       try{
        const job = await Job.updateOne(
            {_id: new mongoose.Types.ObjectId(req.params.id)},
            {$set: updatedJob}
        );
        console.log(job);
        res.status(200).json({message: "job Updated successfully"});
       }
       catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"});
       }
});

module.exports = editJobRoute;