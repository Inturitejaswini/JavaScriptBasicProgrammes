let readline = require('readline-sync');
let util = require('../utility/utility');
let nthNum = readline.question('Enter the nth harmonic no');
if (nthNum === '') {
    console.log('enter valid input');

} else {
    util.harmonicNumber(nthNum);
}