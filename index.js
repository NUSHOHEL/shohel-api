const express = require("express");
const userRoute = require("./routes/user.route");
const app = express();
const dotenv = require("dotenv");
const { connectToServer } = require("./utils/dbConnect");
const port = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
connectToServer((err) => {
  err ? console.log(err) : console.log(`server running at ${port}`);
});

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.all("*", (req, res) => {
  res.send("Path not found");
});
app.listen(port);
