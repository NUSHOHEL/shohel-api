const express = require("express");
const randomRoute = require("./routes/random");
const allUser = require("./routes/all");
const dbconnect = require("./utils/dbConnect");
const app = express();
const dotenv = require("dotenv");
const port = process.env.port || 5000;
dotenv.config();
dbconnect();
app.use("/user", randomRoute);
app.use("/user", allUser);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.all("*", (req, res) => {
  res.send("Path not found");
});
app.listen(port, () => {
  console.log("Server running");
});
