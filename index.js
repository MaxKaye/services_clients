var express     = require("express");
var app         = express();

app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || 3001, function(){
  console.log("Ready to rock!");
});
