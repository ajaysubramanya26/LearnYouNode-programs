var http = require('http');
var bufferList = require('bl');

http.get(process.argv[2], function(res){
  res.pipe(bufferList(function (err, data) {
    if (err) return console.error(err);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
