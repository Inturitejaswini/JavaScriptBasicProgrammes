const readline = require('readline-sync');
const access = require('../utility/utility');
console.log('Program to check anagram');
let string1 = readline.question('Enter the first String : ');
let string2 = readline.question('Enter the second String : ');
if (string1 === '' && string2 === '') {
    console.log('Give proper input');

} else {
    access.checkAnagram(string1, string2);
}