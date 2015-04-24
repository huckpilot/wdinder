var express = require("express");
var app = express();
app.use(express.static("public"));

var bodyParser = require("body-parser");
app.use(bodyParser.json({extended: false}));
var request = require("request");
// var instApi = process.env["INSTAPI"];
// console.log(instApi);

app.get("/", function(req, res){
  res.render("index.html")
});

app.post("/date", function(req, res){
  db.run("INSERT INTO dates (user_name, address, password, phone_number, pic) VALUES(?, ?, ?, ?, ?)", req.body.title, req.body.brief, req.body.image, function(err) {
    res.redirect("/categories")
  });
})


app.listen(3000); console.log("Listening on port 3000");