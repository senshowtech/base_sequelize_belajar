const express = require("express");
const router = express.Router();

const {
  addProduk,
  getAllProduct,
  editProduct,
  deleteProduct,
} = require("../controller/product");

router.post("/add/product", addProduk);
router.patch("/edit/product/:id", editProduct);
router.delete("/delete/product/:id", deleteProduct);
router.get("/all/product", getAllProduct);

module.exports = router;
