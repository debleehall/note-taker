const util = require('util');
const fs = require('fs');

const readNote = util.promisify(fs.readFile);