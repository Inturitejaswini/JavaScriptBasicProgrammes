/**
 * @Auther :Tejaswini
 * @param {First User input } str1
 * @param {Second user input} str2
 * @purpose : this function is use to check entered two user input String is Anagram or not !!
 * @Since : 9-07-2020
 */
exports.checkAnagram = (str1, str2) => {
  try {
    str1 = str1
      .toLowerCase()
      .replace(/[^a-z\d]/g, "")
      .split("");
    str2 = str2
      .toLowerCase()
      .replace(/[^a-z\d]/g, "")
      .split("");
    if (str1.length === str2.length) {
      let count = 0;
      str1.forEach((str) => {
        str.str2.forEach((str3) => {
          console.log(str3);
          if (str1[i] === str2[j]) {
            str2[j] = undefined;
            count++;
          }
        });
      });
      result = count === str1.length ? "anagram" : "not an anagrame";
    }
  } catch (error) {
    return error;
  }
};
