const readline = require('readline-sync');
const access = require('../utility/utility');
let noOfTimes = readline.question('how many times gambling should be done');
if (noOfTimes === '') {
    console.log('Give valid input');
} else {
    console.log(access.whoWins(noOfTimes));
}