//Initializing module for IP address retrieval
const os = require("os");
var interfaces = os.networkInterfaces();
var addresses = [];

//Initializing express (web framework)
const express = require("express");
const app = express();
const port = process.env.PORT || 80; //If a port is specified by the host (Heroku, Glitch...) use that, otherwise use 80. Will use 80 if ran locally

let locations = require("./data/avernus-data.js"); //Importing dataset
let quests = require("./data/quests.js");

//Get local IPv4 address
for (var k in interfaces)
  for (var k2 in interfaces[k]) {
    var address = interfaces[k][k2];
    if (address.family === "IPv4" && !address.internal)
      addresses.push(address.address);
  }

app.use(express.static("frontend")); //Express stuff

//Filter data. Hides from the user the location text (hex key), the terrain information and any item (dream machine component)
//If a location hasn't been explored (status == 'U' as Unexplored) filters out the name as well
app.post("/data/locations", function (req, res) {
  locations.forEach((i) => {
    i.text = "?";
    i.terrain = "?";
    i.item = "?";

    if (i.status == "U") i.name = "?";
  });

  res.send(locations);
});

app.post("/data/quests", function (req, res) {
  const addExpandedProperty = (items, topLevel = true) => {
    return items.map((item) => {
      const newItem = { ...item, expanded: topLevel };

      if (newItem.children) {
        newItem.children = addExpandedProperty(newItem.children, false);
      }

      return newItem;
    });
  };

  const questsExpanded = addExpandedProperty(quests);
  res.send(questsExpanded);
});

//Debug message when running, useful when running locally
app.listen(port, () => {
  console.log(`Listening on http://${addresses}:${port}`);
});
