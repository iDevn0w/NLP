const dotenv = require("dotenv");
dotenv.config();
const fetch = require("node-fetch");
const express = require("express");
const router = express.Router();
// api's
const url = "https://api.meaningcloud.com/sentiment-2.1?";
const key = process.env.KEY;
// send data to server via /api/json endpoint
router.post("/api/json", (req, res) => {
  fetch(`${url}key=${key}&url=${req.body.data}&lang=auto`)
    .then((res) => {
      return res.json();
    })
    .then((response) => res.send(response))
    .catch((error) => console.log(error));
});

module.exports = router;
