
let input = require('readline-sync');
let Object = require('../utility/utility');
let stake = input.questionInt('Enter stake');
let goal = input.questionInt('Enter goal');
let num = input.questionInt('Enter number of times you want to play');
let wins = Object.gambler(stake, goal, num);
console.log('The percentage of wins is ' + (wins / num) * 100);
console.log('The percentage of loss is ' + ((num - wins) / num) * 100);