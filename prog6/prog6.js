var helper = require('./proj6_helper.js');
var dir = process.argv[2];
var fileExtn = process.argv[3];
var i =0 ;
helper(dir,fileExtn,function(err , data){
  if (err) {
    throw err;
    return false;
  }
  if(data.length > 0){
    data.forEach(function(aFile){
      console.log(aFile);
    });
  }
});
