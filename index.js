require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const routesProduct = require("./src/routes/product");
const routesCategory = require("./src/routes/category");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/product", routesProduct);
app.use("/api/category", routesCategory);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
