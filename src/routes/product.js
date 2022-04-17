const express = require("express");
const router = express.Router();
const { addProduk } = require("../controller/product");

router.post("/add", addProduk);

module.exports = router;
