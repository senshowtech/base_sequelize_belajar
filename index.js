require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./src/routes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
