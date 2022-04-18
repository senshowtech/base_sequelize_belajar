const express = require("express");
const router = express.Router();
const {
  addProduk,
  getAllProduct,
  editProduct,
} = require("../controller/product");

router.post("/add", addProduk);
router.patch("/edit/:id", editProduct);
router.get("/all/product", getAllProduct);

module.exports = router;
