var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();


client.after(3000, function() {
  client.animate('flipAhead', 3000);

}).after(10000, function() {
  this.stop();
  this.land();
});
