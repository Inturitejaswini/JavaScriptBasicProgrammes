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
