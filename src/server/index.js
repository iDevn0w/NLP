const express = require("express");
const path = require("path");
const mockAPIResponse = require("./mockApi.js");
const cors = require("cors");
const bodyParser = require("body-parser");
// init server app
const app = express();
// init static html template file
app.use(express.static("dist"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routing handle (send template)
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./dist/index.html"));
});

app.get("/test", (req, res) => {
  res.send(mockAPIResponse);
});
//POST route
app.use(require("./serverRouting"));
//server listining
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`app listen on port ${PORT}`);
});
