// const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

module.exports.getAlluser = async (req, res) => {
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
};
module.exports.getRandomUser = async (req, res) => {
  try {
    const random = Math.floor(Math.random() * 10);
    const db = getDb();
    const randomUser = await db.collection("user").findOne({ id: random });
    res.send(randomUser);
  } catch (err) {
    console.log(err);
  }
};
module.exports.findAuser = async (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const user = await db
    .collection("user")
    .find({ id: +id })
    .toArray();
  res.send(user);
};
module.exports.saveAuser = async (req, res) => {
  try {
    const db = getDb();
    const user = req.body;
    const result = await db.collection("user").insertOne(user);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports.updateUser = async (req, res) => {
  try {
    const db = getDb();
    const { id } = req.params;
    console.log(id);
    const user = await db.collection("user").updateOne({ id: +id }, { $set: req.body });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};
module.exports.bulkUpdate = async (req, res) => {
  try {
    const db = getDb();
    const { photoUrl, updatePhotoUrl } = req.body;
    const updatedUser = db.collection("user").updateMany({ photoUrl: photoUrl }, { $set: {photoUrl:updatePhotoUrl} });
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
  }
};
