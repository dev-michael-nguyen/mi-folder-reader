var fs = require('fs');

function readFolder(dir, handleFile, fileResults) {
  fileResults = fileResults || [];
  var files = fs.readdirSync(dir);
  files.forEach(function (file) {
    var filePath = (dir + file + '/');
    if (fs.statSync(filePath).isDirectory()) {
      fileResults = readFolder(filePath, handleFile, fileResults);
    } else {
      if (handleFile) {
        handleFile(fileResults, file, filePath);
      } else {
        fileResults.push({ file: file, filePath: filePath });
      }
    }
  });
  return fileResults;
}

module.exports = readFolder;