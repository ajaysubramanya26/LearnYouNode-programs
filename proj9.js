var http = require('http');
var bufferList = require('bl');

var getContentsOfUrl = function(url, callback){
  http.get(url, function(res){
    res.pipe(bufferList(function (err, data) {
      if (err) return callback(err);
      data = data.toString();
      callback(null,data);
    }));
  });
};

getContentsOfUrl(process.argv[2], function(err, data){
  if(err) return console.error(err);
    console.log(data);
    getContentsOfUrl(process.argv[3], function(err, data){
      if(err) return console.error(err);
      console.log(data);
      getContentsOfUrl(process.argv[4], function(err, data){
        if(err) return console.error(err);
        console.log(data);
      });
    });
});
