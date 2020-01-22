// index.js

const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/dev", function(req, res) {
  res.send("Hello World!");
});

module.exports.handler = serverless(app);
