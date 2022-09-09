const express = require("express");
const userRoute = require("./routes/user.route");
const app = express();
const dotenv = require("dotenv");
const { connectToServer } = require("./utils/dbConnect");
const port = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
connectToServer((err) => {
  err
    ? console.log(err)
    : app.listen(port, () => {
        console.log(`server running at ${port}`);
      });
});

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send(
   ` <marquee width='100%' direction='left' height='100px'>
      This is a sample scrolling text that has scrolls in the upper direction.
    </marquee>`
  );
});
app.all("*", (req, res) => {
  res.send("Path not found");
});
