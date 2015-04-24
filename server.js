var express = require("express");
var app = express();
app.use(express.static("public"));

var bodyParser = require("body-parser");
app.use(bodyParser.json({extended: false}));
var request = require("request");

var sqlite3 = require("sqlite3");

var db = new sqlite3.Database('wdinder.db');
// var instApi = process.env["INSTAPI"];
// console.log(instApi);

app.get("/", function(req, res){
  res.render("index.html")
});

app.post("/date", function(req, res){
  var newDate = req.body;
  //console.log(newDate);
  db.run("INSERT INTO dates (user_name, address, password, phone_number, pic) VALUES(?, ?, ?, ?, ?)", newDate.user_name, newDate.address, newDate.password, newDate.phone_number, newDate.pic, function(err) {
  db.all("SELECT * FROM dates;", function(err, data){
    res.json(data);
  });
  });
})


app.listen(3000); console.log("Listening on port 3000");