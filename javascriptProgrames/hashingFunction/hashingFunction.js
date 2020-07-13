const util = require('./hashingFunctionBL');
try{
const fs = require('fs');
let content = fs.readFileSync('hashingFunction.txt', 'utf8');
util.hashingFunction(content.split(','));
}catch(error){
    console.log(error);
}