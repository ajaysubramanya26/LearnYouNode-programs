var fs = require('fs');
var path = require('path');
module.exports = function(dirName, fileExtn , callback){
    fs.readdir(dirName,function(err,files){
      if (err) return callback(err);
      files = files.filter(function (file) {
        return path.extname(file) === "."+fileExtn;
      });
      callback(null,files);
    });
};
