const readline = require("readline-sync");
const util = require("./permutationBL");
try {
  let string = readline.question("Enter a string :");
  util.findPermutation(string);
} catch (err) {
  console.log(err);
}
