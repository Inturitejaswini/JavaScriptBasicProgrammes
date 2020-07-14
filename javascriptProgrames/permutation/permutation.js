/**
 * Execution   : default node    cmd>node.permutaion.js
 *
 * purpose     : Check if the arrays returned by two string functions are equal.
 *
 * @description : The static functions to return all permutations of a String using iterative method andRecursion method.
 * @file        :harmonic.js
 * @overview    :find the permutations for an given user input string.
 * @author      :Tejaswini
 * @version     :1.0
 * @since       :10-07-2020
 * */
const readline = require("readline-sync");
const util = require("./permutationBL");
try {
  let string = readline.question("Enter a string :");
  let reg = new RegExp("^$|^([w.-]+)@([w-]+)((.(w){2,3}^[0-9])+)$");
  if (reg.test(string)) {
    console.log("give valid input");
  }
  util.findPermutation(string);
} catch (err) {
  console.log(err);
}
