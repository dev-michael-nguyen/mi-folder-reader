var module = require('./modules/evv');

// run with 'npm start /Users/michael.nguyen/Desktop/2018-05-Logs/'
var folderPath = process.argv[2];
var fileResults = require('./libs/walkFolder')(folderPath, module.handleFile);
// console.log(fileResults);

fileResults.forEach(function (fileResult) {
  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(fileResult.filePath)
  });
  
  lineReader.on('line', function (line) {
    module.processLine(line, fileResult);
  }).on('close', function() {
    module.logResult(fileResults);
  });
});