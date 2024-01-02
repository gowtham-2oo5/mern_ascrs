const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000 || 8000;

//* DB Connection
require("./utils/dbConn");

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
