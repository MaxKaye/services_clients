var express     = require("express");
var app         = express();

app.get("/", function(req, res){
  res.send("Hello");
});

app.listen(process.env.PORT || 3001, function(){
  console.log("Ready to rock!");
});
