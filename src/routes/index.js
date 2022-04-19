const express = require("express");
const router = express.Router();

const {
  addProduk,
  getAllProduct,
  editProduct,
} = require("../controller/product");

const { addUser } = require("../controller/user");

router.post("/add", addUser);

router.post("/add/product", addProduk);
router.patch("/edit/product/:id", editProduct);
router.get("/all/product", getAllProduct);

module.exports = router;
