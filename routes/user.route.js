const express = require("express");
// const { ObjectId } = require("mongodb");
const userController = require("../controllers/userController");
// const { getDb } = require("../utils/dbConnect");

const router = express.Router();

router.get("/all", userController.getAlluser);
router.get("/random", userController.getRandomUser);
router.get("/find/:id", userController.findAuser);

router.post("/save", userController.saveAuser);

router.patch("/update/:id", userController.updateUser);
router.patch("/bulk-update", userController.bulkUpdate);
module.exports = router;
