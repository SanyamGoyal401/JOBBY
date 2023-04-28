const express = require('express');
const Job = require('../../db/schema_models/jobSchema');
const addJobRoute = express();
const requireAuth = require('../../middlewares/requireAuth');
addJobRoute.use(express.json());

addJobRoute.post("/add",requireAuth, async(req, res)=>{
    const {company_name, company_logo, monthly_salary, job_position, job_type, remote_office, location, job_desc, about_company, skills_required, add_info, recruiterName } = req.body;
    if(!company_name || 
       !company_logo ||
       !monthly_salary||
       !job_position ||
       !job_type ||
       !remote_office ||
       !location || 
       !job_desc ||
       !about_company ||
       !skills_required || 
       !add_info ||
       !recruiterName){
        res.status(422).json({message: "all fields required"})
       }

       try{
        const job = new Job({
            company_name,
            company_logo,
            monthly_salary,
            job_position,
            job_type,
            remote_office,
            location,
            job_desc,
            about_company,
            skills_required,
            add_info,
            recruiterName,
        });
        await job.save();
        res.status(200).json({message: "job saved successfully"});
       }
       catch(err){
        res.status(500).json({message:"Internal server error"});
       }
});

module.exports = addJobRoute;