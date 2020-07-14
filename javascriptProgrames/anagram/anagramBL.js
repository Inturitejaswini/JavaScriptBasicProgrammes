/**
 * @Auther :Tejaswini
 * @param {First User input } str1
 * @param {Second user input} str2
 * @purpose : this function is use to check entered two user input String is Anagram or not !!
 * @Since : 9-07-2020
 */

exports.checkAnagram = (firstString, secondString) => {
  try {
    firstString = firstString.split("").join("");
    secondString = secondString.split("").join("");
    if (firstString.length === secondString.length) {
      let count = 0;
      firstString.forEach((i) => {
        i.secondString.forEach((j) => {
          if (firstString[i] === secondString[j]) {
            secondString[j] = undefined;
            count++;
          }
        });
      })(count === firstString.length)
        ? "Anagram"
        : "not a Anagram";
    } else {
      console.log("not a Anagram");
    }
  } catch (error) {
    return error;
  }
};
