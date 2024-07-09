const morgan = require("morgan");
const express = require("express");

const app = express();
app.use(morgan("dev"));

app.get("/api/GET", (req, res) => {
  console.log("data has fetched");
  res.json({
    message: "data has fetched",
  });
});

app.listen(1000, () => {
  console.log("server is running on port 1000");
});
