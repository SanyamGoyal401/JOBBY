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
    required: true,
  },
  job_type: {
    type: [String],
  },
  remote_office: {
    type: String,
    enum: ["Remote", "Office"],
  },
  location: {
    type: String,
  },
  job_desc: {
    type: String,
  },
  about_company: {
    type: String,
  },
  skills_required: {
    type: [String],
  },
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
