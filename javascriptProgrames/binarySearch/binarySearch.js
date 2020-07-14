/**
 * Execution   : default node    cmd>node.binarySearch.js
 *
 * purpose     : To find a word from a file
 *
 * @description :Read in a list of words from File. Then prompt the user to enter a word to search the list. The program reports if the search word is found in the list.
 * @file        :binarySearch.js
 * @overview    :To find a word given by user from a file
 * @author      :Tejaswini
 * @version     :1.0
 * @since       :9-07-2020
 * */
const readline = require("readline-sync");
const util = require("./binarySearchBL");
let fs = require("fs");
try {
  const contents = fs.readFileSync("teja.txt", "utf8");
  let replacedContents = contents.replace(",", " ");
  let splitString = replacedContents.split(" ");
  splitString.sort();
  let input = readline.question("Enter a word to search in a file : ");
  let reg = new RegExp("^$|^([w.-]+)@([w-]+)((.(w){2,3})+)$");
  if (reg.test(input)) {
    console.log("give valid input");
  }
  let isDataPresent = util.binarySearch(splitString, input);
  isDataPresent > -1
    ? "Word is present in a file"
    : "Word is not present in a file";
} catch (err) {
  console.log(err);
}
