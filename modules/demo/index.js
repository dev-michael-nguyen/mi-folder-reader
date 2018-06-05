/**
 * Override how file will be handled by processFolder() method
 *
 * @param {Array} fileResults Array to store file results
 * @param {string} fileName Current file name
 * @param {string} filePath Current file path
 */
function handleFile(fileResults, fileName, filePath){
  fileResults.push({ fileName: fileName, filePath: filePath});
}

/**
 * Override how each line in the file will be handled by processFolder() method
 * NOTE: processLine will be called asynchronously by processFolder() whenever a line is available to be read from buffer
 *
 * @param {string} line Line output by line reader stream from require('readline') 
 * @param {Object} fileResult File result object to store accumulate result data for this file
 */
function processLine(line, fileResult) {
  // do something
}

/**
 * Override how final results will be logged
 *
 * @param {*} fileResults Final array of file results after every lines and every files have been processed
 */
function logFinalResults(fileResults){
  console.log(fileResults);
}

module.exports = {
  handleFile,
  processLine,
  logFinalResults
};