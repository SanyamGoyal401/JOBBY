const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const User = require("../db/schema_models/userSchema");

app.use(express.json());

app.post("/register", async (req, res) => {
  const { name, email, mobile, role, password } = req.body;
  if (!name || !email || !mobile || !role || !password) {
    return res.status(404).json({ error: "Please fill all fields" });
  }
  try {
    let exists = await User.findOne({ email: email });
    if (exists) {
      res.status(422).json({ error: "User already exists" });
    } else {
      const user = new User({ name, email, mobile, role, password });
      await user.save();
      const token = await user.generateAuthToken();
      res.json({
        message: "User registered",
        token: token,
      });
    }
  } catch (err) {
    res.status(500).json({ error: "failed to register user" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ error: "Please fill all fields" });
  }
  try {
    let exists = await User.findOne({ email: email });
    if (exists) {
      const isMatch = await bcrypt.compare(password, exists.password);
      if (isMatch) {
        const token = await exists.generateAuthToken();
        res.json({
          message: "user login successfully",
          token: token,
        });
      } else {
        res.json({ message: "Invalid credentials" });
      }
    } else {
      res.json({ message: "user login failed" });
    }
  } catch (error) {}
});

module.exports = app;
