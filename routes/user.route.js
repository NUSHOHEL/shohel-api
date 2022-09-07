const express = require("express");
const { getDb } = require("../utils/dbConnect");
const router = express.Router();

router.get("/all", async (req, res) => {
  const { limit } = req.query;
  const db = getDb();
  if (limit) {
    const users = await db
      .collection("user")
      .find()
      .limit(+limit)
      .toArray();
    res.send(users);
  } else {
    const users = await db.collection("user").find().toArray();
    res.send(users);
  }
});
router.get("/random", async (req, res) => {
  try {
    const random = Math.floor(Math.random() * 10);
    const db = getDb();
    const randoUser = await db.collection("user").findOne({ id: random });
    res.send(randoUser);
  } catch (err) {
    console.log(err);
  }
});
router.get("/find/:id", async (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const user = await db.collection("user").find({ id: +id }).toArray();
  res.send(user);
});

router.post("/save", async (req, res) => {
  try {
    const db = getDb();
    const user = req.body;
    const result = await db.collection("user").insertOne(user);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
