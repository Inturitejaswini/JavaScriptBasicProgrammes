const util = require('./hashingFunctionBL');
const fs = require('fs');
let content = fs.readFileSync('hashingFunction.txt', 'utf8');
util.hashingFunction(content.split(','));