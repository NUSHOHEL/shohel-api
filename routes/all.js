const express = require("express");
const data = require("../data");
const router = express.Router();

router.get("/all/:id?", (req, res) => {
  const { limit } = req.query;
  limit ? res.send(data.splice(0, limit)) : res.send(data);
});
module.exports = router;
