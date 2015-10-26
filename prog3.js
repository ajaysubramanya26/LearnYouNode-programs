var fs = require('fs')
var pathToFile = process.argv[2]
var fileContents = fs.readFileSync(pathToFile).toString();
var linesOfFile =  fileContents.split('\n');
console.log(linesOfFile.length-1)
