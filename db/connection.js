var mongoose = require("mongoose");


var ClientSchema = new mongoose.Schema({
  name: String,
  services: [type: ObjectId, ref:"Service"]
});

var ServiceSchema = new mongoose.Schema({
  name: String
  clients: [
    {type: ObjectId, ref: "Clients"}
  ]
});

mongoose.model("Service", ServiceSchema);
mongoose.model("Client", ClientSchema);

mongoose.connect("mongodb://localhost/services_clients");

module.exports = mongoose;
