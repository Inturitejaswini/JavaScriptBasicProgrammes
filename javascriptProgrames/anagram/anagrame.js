const readline = require("readline-sync");
const util = require("./anagramBL");
console.log("Program to check anagram");
try {
  let str1 = readline.question("Enter the first String : ");
  let str2 = readline.question("Enter the second String : ");
  console.log("Give proper input");
  util.checkAnagram(str1, str2);
} catch (err) {
  console.log(err);
}
