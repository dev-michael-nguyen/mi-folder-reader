# mi-dss

> A utility tool for reading and processing text files in specified folder.

## Project Structure
``` bash
root
| # common library implementations
|-libs
| # module implementations for different types of file processing
|-modules
```

## Module Implementations

1. Add new module implementation folder under 'modules'.
2. Add index.js which should implement and export 3 functions. More details and documentations in [Demo](https://github.com/duyl3nguy3n/mi-folder-reader/blob/master/modules/demo/index.js).
``` javascript
module.exports = {
  handleFile,
  processLine,
  logFinalResults
};
```

3. Run module.
``` bash
npm start <moduleName> <folderPath>
```