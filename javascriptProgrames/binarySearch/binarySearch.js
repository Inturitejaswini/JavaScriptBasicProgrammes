const readline = require('readline-sync');
const util = require('./binarySearchBL');
let fs = require('fs');
var contents = fs.readFileSync('teja.txt', 'utf8');
let replacedContents = contents.replace(',', ' ');
let splitString = replacedContents.split(' ');
splitString.sort();
let input = readline.question('Enter a word to search in a file : ')
if (input === '') {
    console.log('Give valid input');
} else {
    let isDataPresent = util.binarySearch(splitString, input);
    if (isDataPresent>-1) {
        console.log('Word is present in a file');
    } else {
        console.log('Word is not present in a file');
    }
}
