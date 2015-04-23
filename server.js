var express = require("express");
var app = express();
app.use(express.static("public"));

var bodyParser = require("body-parser");
app.use(bodyParser.json({extended: false}));

app.get("/", function(req, res){
  res.render("index.html")
});

var request = require("request");
// var instApi = process.env["INSTAPI"];
// console.log(instApi);

app.listen(3000); console.log("Listening on port 3000");