const readline = require('readline-sync');
const util = require('./permutationBL');
let string = readline.question('Enter a string :');
if (string === '') {
    console.log('Give valid input');
} else {
    util.findPermutation(string);
}