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
  util.findPermutation(string);
} catch (err) {
  console.log(err);
}
