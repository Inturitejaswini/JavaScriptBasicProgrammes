/**
 * @Auther :Tejaswini
 * @param {First User input } str1
 * @param {Second user input} str2
 * @purpose : this function is use to check entered two user input String is Anagram or not !!
 * @Since : 9-07-2020
 */
exports.checkAnagram = (str1, str2) => {
  try {
    str1 = str1.split("").join("");
    str2 = str2.split("").join("");
    if (str1.length === str2.length) {
      let count = 0;
      str1.forEach((i) => {
        i.str2.forEach((j) => {
          if (str1[i] === str2[j]) {
            str2[j] = undefined;
            count++;
          }
        });
      })
      (count === str1.length) ? "Anagram"  : "not a Anagram"
    } else {
      console.log("not a Anagram");
    }
  } catch (error) {
    return error;
  }
};
