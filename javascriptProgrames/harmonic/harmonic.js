/**
 * Execution   : default node    cmd>node.harmonic.js
 * 
 * purpose     : To find harmonic number
 * 
 * @description :Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
 * @file        :harmonic.js
 * @overview    :find the harmonic number for an given user input
 * @author      :Tejaswini
 * @version     :1.0
 * @since       :10-07-2020
 * */
let readline = require("readline-sync");
let util = require("./harmonicBL");
try {
  let nthNum = readline.question("Enter the nth harmonic no");
  let re = /\d+/g;
  let num = "10";
  let nthNum = num.match(re);
  util.harmonicNumber(nthNum);
} catch (err) {
  console.log(err);
}
