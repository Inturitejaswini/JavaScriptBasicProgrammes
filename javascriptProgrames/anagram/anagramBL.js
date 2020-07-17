/**
 * @Auther :Tejaswini
 * @param {First User input } firstString
 * @param {Second user input} secondString
 * @purpose : this function is use to check entered two user input String is Anagram or not !!
 * @Since : 9-07-2020
 */

exports.isAnagram = (firstString, secondString) => {
  firstString = firstString.split("").sort().join("");
  secondString = secondString.split("").sort().join("");
  check = true;
  if (firstString.length != secondString.length) {
    console.log("Not an anagram");
    check = false;
  }
  if (check) {
    (firstString === secondString) ? console.log("Anagram") : console.log("not a anagram");
  }
};
