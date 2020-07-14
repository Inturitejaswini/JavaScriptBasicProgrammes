/**
 * Execution    : default node    cmd>node.anagram.js
 *
 * purpose      : To find any two strings are anagram
 * @description :One string is an anagram of another if the second is simply a rearrangement of the first.
 * For example, 'heart' and 'earth' are anagrams.
 * @file        :anagram.js
 * @overview    :get two strings as input from user and check whether it is anagram are not
 * @author      :Tejaswini
 * @version     :1.0
 * @since       :9-07-2020.
 * */
const readline = require("readline-sync");
const util = require("./anagramBL");
console.log("Program to check anagram");
try {
  let firstString = readline.question("Enter the first String : ");
  let secondString = readline.question("Enter the second String : ");
  let regex = new RegExp("^$|^([w.-]+)@([w-]+)((.(w){2,3})+)$");
  if (regex.test(firstString, secondString)) {
    throw ("invalid user input")
  }
  util.checkAnagram(firstString, secondString);
} catch (err) {
  console.log(err);
}
