/**
 * Execution   : default node    cmd>node.gambler.js
 *
 * purpose     : To find who wins the gamble
 *
 * @description :Simulates a gambler who start with $stake and place fair $1 bets until he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of times he/she wins and the number of bets he/she makes. Run the experiment N times, averages the results, and prints them out.
 * @file        :gambler.js
 * @overview    :Generate random numbers and find who wins the gamble
 * @author      :Tejaswini
 * @version     :1.0
 * @since       :10-07-2020
 * */
let input = require("readline-sync");
let gamblerObject = require("./gamblerBL");
try {
  let stake = input.questionInt("Enter stake :");
  let goal = input.questionInt("Enter goal :");
  let num = input.questionInt("Enter number of times you want to play :");
  let patt = new RegExp("^$|^([w.-]+)@([w-]+)((.(w){2,3})+)$");
  if (patt.test(num)) {
    console.log("give valid input");
  }
  let wins = gamblerObject.gambler(stake, goal, num);
  console.log("The percentage of wins is :" + (wins / num) * 100);
  console.log("The percentage of loss is :" + ((num - wins) / num) * 100);
} catch (err) {
  console.log(err);
}
