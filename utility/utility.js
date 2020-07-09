/**
 * @module(String,String)string1,string2 - used for checking anagram
 */
exports.checkAnagram = (str1, str2) => {
    try {
      str1 = str1.toLowerCase().replace(/[^a-z\d]/g,'').split("");
      str2 = str2.toLowerCase() .replace(/[^a-z\d]/g,'').split("");
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
  },

    /**
     * @module(number)couponNumber as user input
     */
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
    },

    /**
     * @module(number)nthNumber as-user input
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
    }

/**
 * @module(stake,goal,num)as perameters to find the gambler num.
 */
exports.gambler = (stake, goal, num) => {
    let [wins, bets] = [0, 0];
    for (let i = 0; i < num; i++) {
        let temp = stake;
        while (temp > 0 && temp < goal) {
            bets++;
            if (Math.random() < 0.5) {
                temp++;
            }
            else {
                temp--;
            }
        }
        if (temp == goal) {
            wins++;
        }
    }
    return wins;
}

/**
 * @module(Array,input)sortArray,
 * input - sorted array and user input. 
 */
exports.binarySearch = (sortArray, input) => {
    try {
        let front = 0, end = sortArray.length - 1, mid = Math.floor((front + end) / 2);
        console.log(sortArray);
        while (front <= end && sortArray[mid] != input) {
            if (input < sortArray[mid]) {
                end = mid - 1;
            } else {
                front = mid + 1;
            }
            mid = Math.floor((front + end) / 2);
        }
        console.log(mid);
        return (sortArray[mid] != input) ? -1 : mid + 1;
    } catch (error) {
        return error;
    }

}

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
        for (let i = 0; i < fact; i++) {
            for (let j = 0; j < string.length; j++) {
                let replacedString = string.replace(string[k], string[j]);
                console.log(replacedString);
            }
            if (k === string.length) {
                k = 0;
            } else {
                k++;
            }
        }
    }
}