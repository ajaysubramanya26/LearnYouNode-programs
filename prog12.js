var http = require('http');
var map = require('through2-map');

var portNum = process.argv[2];
var server = http.createServer(function(req,res){
  if (req.method != 'POST'){
    return res.end('Invalid HTTP method. Use POST\n');
  }
  req.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(res)
});
server.listen(portNum);
