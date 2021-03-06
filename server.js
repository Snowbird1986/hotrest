var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//tables needed
var reservations =[

];
var servedReservations = [

];


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/res", function(req, res) {
    res.sendFile(path.join(__dirname, "res.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  app.get("/reservations", function(req, res) {
    return res.json(reservations);
  });
  app.post("/servedReservations", function(req, res) {
    reservations = reservations.filter(reservations,reservations.uniqueID !== servedReservations.uniqueID)
    return res.json(reservations);
  });

  app.post("/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });