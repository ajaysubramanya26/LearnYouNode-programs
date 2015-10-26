var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var fileExtn = process.argv[3];

fs.readdir(dir,function(err,files){
  files.forEach(function(file){
    if (path.extname(file) === "."+fileExtn){
        console.log(file);
    }
  });
});
