
var readFolder = require('./read-folder');
var readLine = require('readline');
var fs = require('fs');

function processFolder(folderPath, module) {
  var fileResults = readFolder(folderPath, module.handleFile);
  // console.log(fileResults);
  
  var processedFiles = 0;
  fileResults.forEach(function (fileResult) {
    var lineReader = readLine.createInterface({
      input: fs.createReadStream(fileResult.filePath)
    });
    
    // This is bindings to events so module.processLine and module.logResult are asynchronously called when event happened.
    lineReader.on('line', function (line) {
      module.processLine(line, fileResult);
    }).on('close', function() {
      processedFiles++;
      
      // Logging progress (process.stdout.write with \r will reset and write log in the same line)
      process.stdout.write(`Processed ${processedFiles} out of ${fileResults.length} files\r`);
      
      // When all files are processed, log final results
      if (processedFiles == fileResults.length){
        console.log('\n');
        module.logResult(fileResults);
      }
    });
  });
}

module.exports = processFolder;