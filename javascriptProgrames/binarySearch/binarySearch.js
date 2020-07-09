const readline = require("readline-sync");
const util = require("./binarySearchBL");
let fs = require("fs");
try {
  const contents = fs.readFileSync("teja.txt", "utf8");
  let replacedContents = contents.replace(",", " ");
  let splitString = replacedContents.split(" ");
  splitString.sort();
  let input = readline.question("Enter a word to search in a file : ");
  let isDataPresent = util.binarySearch(splitString, input);
  isDataPresent =isDataPresent > -1 ? "Word is present in a file" : "Word is not present in a file";
} catch (err) {
  console.log(err);
}
