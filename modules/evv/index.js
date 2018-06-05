var DATE_REG_EX = new RegExp(/[0-9]+-[0-9]+-[0-9]+/);
function handleFile(fileResults, file, filePath){
  if (file !== 'Warn.log') { return; }
  fileResults.push({
    filePath: filePath,
    date: DATE_REG_EX.exec(filePath).pop(),
    "270": 0,
    "271": 0,
    "837": 0,
    "999": 0,
    "277": 0
  });
}

var FILTER_MAP = [
	{ code: "270", lineRegEx: new RegExp(/EB Inquiry \(270\): \d/), filesRegEx: new RegExp(/[0-9]+ files/) },
	{ code: "271", lineRegEx: new RegExp(/EB Response \(271\)/), filesRegEx: new RegExp(/[0-9]+ eligibility file/) },
	{ code: "837", lineRegEx: new RegExp(/837P Upload/), filesRegEx: new RegExp(/[0-9]+ files/) },
	{ code: "999", lineRegEx: new RegExp(/WARN Acknowledgment Processor/), filesRegEx: new RegExp(/[0-9]+ total files/) },
	{ code: "277", lineRegEx: new RegExp(/277 Claim Acknowledgment Processor:/), filesRegEx: new RegExp(/[0-9]+ total files/) },
];
var FILE_COUNT_REG_EX = new RegExp(/[0-9]+/);
function processLine(line, fileResult) {
  FILTER_MAP.forEach(function (filter) {
    if (!filter.lineRegEx.test(line)) { return; }

    var filesRegExResult = filter.filesRegEx.exec(line);
    var filesStr = filesRegExResult ? filesRegExResult.pop() : '';
    var filesCountRegExResult = FILE_COUNT_REG_EX.exec(filesStr);
    var filesCount = filesCountRegExResult ? filesCountRegExResult.pop() : 0;
    var stat = {
      code: filter.code,
      files: parseInt(filesCount)
    };
    // console.log(line);
    // console.log(stat);
    fileResult[stat.code] += stat.files;
  });
}

function logResult(fileResults){
  console.log("\nDate, 270 Files Transmitted, 271 Files Received, 837 Files Transmitted, 999 Files Received, 277 Files Received, Payment Extract Files Received");
  fileResults.forEach(function(r) {
    console.log([r.date, r["270"], r["271"], r["837"], r["999"], r["277"]].join(', '));
  });
}

module.exports = {
  handleFile,
  processLine,
  logResult
};