require("dotenv").config();
const express = require("express");
const db = require("./db/connection");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(require("./routes"));

db.once("open", () => {
  app.listen(PORT, () => {
    console.log("Listning at port: " + PORT);
  });
});
