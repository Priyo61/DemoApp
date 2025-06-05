const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    mgs: "home page",
  });
});
app.post("/", (req, res) => {
  res.json({
    mgs: "home page",
  });
});

app.listen(3030);
