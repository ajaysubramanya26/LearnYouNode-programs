var http = require('http');
var fs = require('fs');
var portNum = process.argv[2];
var filePath = process.argv[3];

var httpServer = http.createServer(function(req, res){
  var src = fs.createReadStream(filePath);
  src.pipe(res);
});

httpServer.listen(portNum);
