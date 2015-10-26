var http = require('http');
var url = require('url');
var portNum = process.argv[2];

// JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}' or '{"y":6,"x":5}'

var parseTime = function(time){
  return{
    "hour":time.getHours(),
    "minute":time.getMinutes(),
    "second":time.getSeconds()
  }
}

var unixTime =  function(time){
  return {"unixtime" : time.getTime()};
}

var server = http.createServer(function(req,res){
  var parsedUrl = url.parse(req.url, true);
  var date = new Date(parsedUrl.query.iso);
  var result;
  if("/api/parsetime" === parsedUrl.pathname){
    result = parseTime(date);
  }else if ("/api/unixtime" === parsedUrl.pathname){
    result = unixTime(date);
  }
  if(result){
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify(result));
  }else{
    res.writeHead(404);
    res.end()
  }
});
server.listen(portNum);
