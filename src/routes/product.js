const express = require("express");
const router = express.Router();

router.get("/cek", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
