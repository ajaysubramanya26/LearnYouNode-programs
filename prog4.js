var fs = require('fs');
var pathToFile = process.argv[2];

fs.readFile(pathToFile,'utf8',function(err,data){
    if (err) throw err;
    if (data){
      var linesOfFile = data.split('\n');
      console.log(linesOfFile.length-1);
    }
});
