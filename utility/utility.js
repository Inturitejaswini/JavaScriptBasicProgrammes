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
    let sum = 0.0;
    if (nthNum != 0) {
      for (let i = 1; i <= nthNum; i++) {
        sum = sum + 1 / i;
      }
      console.log( sum);
    }
  } catch (err) {
    return err;
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

/**
 * @author: Tejaswini
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
     (input < sortArray[mid]) ? (end = mid - 1) : (front = mid + 1)
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
/**
 * @author: Tejaswini
 * @purpose : To find the sorted array using the sorting technique called "Merge Sort"
 * @Since : 10-07-2020
 * @param { User input } array
 */
exports.mergeSort = (array) => {
  function dividing(array) {
    if (array.length < 2) {
      return array;
    }
    let mid = Math.floor(array.length / 2);
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid, array.length);
    return conquer(dividing(leftArray), dividing(rightArray));
  }
  function conquer(leftArray, rightArray) {
    let sortedArray = [];
    while (leftArray.length > 0 && rightArray.length > 0)
      sortedArray.push(
        leftArray[0] < rightArray[0] ? leftArray.shift() : rightArray.shift()
      );
    return sortedArray.concat(leftArray.length ? leftArray : rightArray);
  }
  console.log(dividing(array));
};

/**
 * @Auther :Tejaswini
 * @module hashingFunction
 * @param {userInput} data.
 * @purpose : this function is use to check entered user input data is used to store and fetch the no from file.
 * @Since : 13-07-2020
 */
exports.hashingFunction = (data) => {
  class HashTable {
    constructor() {
      this.buckets = new Array(21);
    }
    hash(data) {
      return data % 21;
    }
    set(key, value) {
      let index = this.hash(key);
      this.buckets[index] = value;
    }
    get(key) {
      const index = this.hash(key);
      return this.buckets[index];
    }
  }
  let hashTable = new HashTable();
  let i = 0;
  while (i < data.length) {
    hashTable.set(data[i], data[i]);
    i++;
  }
  console.log(hashTable.get(12));
};

/**
 * @author: Tejaswini
 * @purpose : This function is use to find total cost for the inventory
 * @Since : 10-07-2020
 */
exports.inventory=()=>{
  const fs=require('fs');
  try{
    let text=fs.readFileSync('./inventoryDataManagement.json').toString('utf-8');
    let jsonText=JSON.parse(text);
    console.log(jsonText)
    for(let data in jsonText.Grocery){
        for(let i=0;i<jsonText.Grocery[data].length;i++){
            let name = jsonText.Grocery[data[i]].name;
            let weight = jsonText.Grocery[data[i]].weigth;
            let price = jsonText.Grocery[data[i]].pricePerKg;
            console.log('Name is : ' + name + ' ; Weight is : ' + weight + ' ; Prices is : ' + price + ' ; Total price is : ' + price * weight);
        }
    }
  }catch(err){
      console.log(err);
  }
}