const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  return res.json({ hello: "Wold 2" });
});

app.listen(3000);
