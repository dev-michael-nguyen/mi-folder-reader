var processFolder = require('./libs/process-folder');

// Run with 'npm start demo ./modules/demo/demo-logs/' or 'npm start ltss-evv ./modules/demo/demo-logs/'
var moduleName = process.argv[2];
var folderPath = process.argv[3];
processFolder(folderPath, require(`./modules/${moduleName}`));
