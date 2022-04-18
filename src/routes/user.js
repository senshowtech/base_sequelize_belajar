const express = require("express");
const router = express.Router();
const { addUser } = require("../controller/user");

router.get("/add", addUser);

module.exports = router;
