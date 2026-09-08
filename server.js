const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./Models/UserSchema");
const app = express();

mongoose.connect("mongodb://localhost:27017/authentication-db");

app.use("/", express.static(path.join(__dirname, ".client")));
app.use(bodyParser.json());

app.post("/api/register", async (request, response) => {
  console.log(request.body);
  const { email, password: plaintextPassword } = request.body;
  const password = await bcrypt.hash(plaintextPassword, 10); //10 is the num of encryptions it runs on the password
  try {
    const res = await User.create({ email, password });
    console.log("User created successfully", res);
  } catch (error) {
    console.log(error);
  }
});

app.listen(9999, () => {
  console.log("server up at 9999");
});
