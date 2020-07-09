const readline = require('readline-sync');
const util = require('../utility/utility');
let string = readline.question('Enter a string :');
if (string === '') {
    console.log('Give valid input');
} else {
    util.findPermutation(string);
}