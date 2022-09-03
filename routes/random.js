const express = require("express");
const data = require("../data");
const router = express.Router();

router.get("/random", (req, res) => {
  const random = Math.floor(Math.random() * data.length);
//   console.log(random);
  res.send(data[random]);
});

module.exports = router;
