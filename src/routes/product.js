const express = require("express");
const router = express.Router();
const { addProduk, getAllProduct } = require("../controller/product");

router.post("/add", addProduk);
router.get("/all/product", getAllProduct);

module.exports = router;
