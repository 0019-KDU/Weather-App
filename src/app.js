const express = require("express");
const hbs = require("hbs");
const path = require("path");
const weatherData = require("../utils/weatherData");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello ,this weather application");
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send("Address is required");
  }
  weatherData(req.query.address, (error, result) => {
    if (error) {
      return res.send(error);
    }
    res.send(result);
  });
});

app.get("*", (req, res) => {
  res.send("This route is does not exist");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
