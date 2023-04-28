const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true,
  },
  company_logo: {
    type: String,
    required: true,
  },
  monthly_salary: {
    type: Number,
    required: true,
  },
  job_position: {
    type: String,
    enum: ['FullTime', 'PartTime', 'Intern'],
    required: true,
  },
  job_type: {
    type: String,
  },
  remote_office: {
    type: String,
    enum: ["Remote", "Office"],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  job_desc: {
    type: String,
    required: true,
  },
  about_company: {
    type: String,
    required: true,
  },
  skills_required: {
    type: [String],
  },
  add_info: {
    type: String,
    required: true,
  },
  recruiterName: {
    type: String,
    required: true,
  },
  lastUpdated:{
    type: Date,
    default: Date.now,
  }
});


const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
