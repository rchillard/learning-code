const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET route for root
app.get("/dev/status", (req, res) => {
  res.status(200).send("Welcome to the Thunderdome!");
});

// Handle POST route for root
app.post("/dev/summon", (req, res) => {
  //   const { pass } = req.body.pass;
  const pass = req.body.passphrase;
  if (pass === process.env.Passphrase) {
    res.status(201).send("You have the magic word!");
  } else {
    res.status(403).send("That's not the magic word.  Try again...");
  }
});

// Handle in-valid route
app.all("*", function(req, res) {
  const response = { data: null, message: "Route not found!!" };
  res.status(400).send(response);
});

// wrap express app instance with serverless http function
module.exports.handler = serverless(app);
