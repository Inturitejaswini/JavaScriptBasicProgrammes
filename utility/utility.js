/**
 * @Auther :Tejaswini
 * @param {First User input } str1
 * @param {Second user input} str2
 * @purpose : this function is use to check entered two user input String is Anagram or not !!
 * @Since : 9-07-2020
 */
exports.checkAnagram = (str1, str2) => {
  try {
    str1 = str1.toLowerCase().replace(/[^a-z\d]/g, "").split("");
    str2 = str2.toLowerCase().replace(/[^a-z\d]/g, "").split("");
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
      let result = count === str1.length ? "anagram" : "not an anagrame";
      console.log(result);
    }
  } catch (error) {
    return error;
  }
};
/** 
  @purpose :To find coupon number.
  @Auther :Tejaswini
  @version:  1.0
  @return 
  @Since : 9-07-2020
  **/
exports.toFindCouponNumber = (couponNumber) => {
  try {
    let arr = new Array();
    while (true) {
      let randomCouponNumber = Math.round(Math.random() * couponNumber);
      arr.push(randomCouponNumber);
      if (couponNumber == randomCouponNumber) {
        break;
      }
    }
    return arr;
  } catch (error) {
    return error;
  }
};
/**
 * @Auther :Tejaswini
 * @param { User input } nthNum
 * @purpose : this function is use to find the harmonic number for an given user input.
 * @Since : 10-07-2020
 */
exports.harmonicNumber = (nthNum) => {
  try {
    let value = 1;
    for (let index = 2; index <= nthNum; index++) {
      value = value + 1 / index;
    }
    console.log(value);
  } catch (error) {
    return error;
  }
};

/**
 * @author: Tejaswini
 * @Purpose : To find percentage of wins and loss given the stake and number of attempts
 * @Since : 10-07-2020
 */
exports.gambler = (stake, goal, num) => {
  let [wins, bets] = [0, 0];
  for (let i in num) {
    console.log(num);
    let temp = stake;
    while (temp > 0 && temp < goal) {
      bets++;
      let result = Math.random() < 0.5 ? temp++ : temp--;
      console.log(result);
    }
    if (temp == goal) {
      wins++;
    }
  }
  return wins;
};

/**@author: Tejaswini
 * @purpose : This function is use to find the search iteam into the sorted array using Binary Search for String!!
 * @Since : 9-07-2020
 * @param {Sorted Array} sortArray
 * @param {Search item} input
 */
exports.binarySearch = (sortArray, input) => {
  try {
    let front = 0,
      end = sortArray.length - 1,
      mid = Math.floor((front + end) / 2);
    console.log(sortArray);
    while (front <= end && sortArray[mid] != input) {
      result = input < sortArray[mid] ? (end = mid - 1) : (front = mid + 1);
      mid = Math.floor((front + end) / 2);
    }
    console.log(mid);
    return sortArray[mid] != input ? -1 : mid + 1;
  } catch (error) {
    return error;
  }
};

/**
 * @Auther :Tejaswini
 * @param { User input } string
 * @purpose : this function is use to find the permutations for an given user input string.
 * @Since : 10-07-2020
 */
exports.findPermutation = (string) => {
  let fact = findFact(string);
  function findFact(string) {
    let factNumber = string.length;
    let fact = 1;
    while (factNumber !== 0) {
      fact = fact * factNumber;
      factNumber--;
    }
    return fact;
  }
  iteration(fact, string);
  function iteration(fact, string) {
    let k = 0;
    console.log(string[k]);
    fact.forEach((factorial) => {
      console.log(factorial);
      factorial.string.forEach((stringFact) => {
        console.log(stringFact);
        let replacedString = string.replace(string[k], string[j]);
        console.log(replacedString);
      });
    });
    let result = k === string.length ? (k = 0) : k++;
    console.log(result);
  }
};
