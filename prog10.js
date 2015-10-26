var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function(socket){
  var formattedDate = strftime('%F %R' , new Date())
  socket.end(formattedDate);
});
server.listen(process.argv[2]);
