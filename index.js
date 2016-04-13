var express     = require("express");
var app         = express();
var mongoose = require("./db/connection");

app.use("/", express.static("public"));

app.get("/*", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || 3001, function(){
  console.log("Ready to rock!");
});
