const readline = require('readline-sync');
const util = require('../utility/utility');
let inputArr = readline.question('Enter a string :');
if (inputArr === '') {
    console.log('Give valid input');
} else {
    util.permutator(inputArr);
}