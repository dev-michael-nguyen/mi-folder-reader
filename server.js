var processFolder = require('./libs/process-folder');

// Run with 'npm start demo /Users/michael.nguyen/Desktop/2018-05-Logs/'
var moduleName = process.argv[2];
var folderPath = process.argv[3];
processFolder(folderPath, require(`./modules/${moduleName}`));
