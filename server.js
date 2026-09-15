const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const {
  registerUser,
  validateUser,
} = require("./server/presentation/registrationController");
const app = express();

mongoose.connect("mongodb://localhost:27017/authentication-db");

app.use("/", express.static(path.join(__dirname, ".client")));
app.use(bodyParser.json());

app.post("/api/register", registerUser);
app.post("/api/logIn", validateUser);

app.listen(9999, () => {
  console.log("server up at 9999");
});
