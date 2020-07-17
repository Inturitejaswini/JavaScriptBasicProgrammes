/**
 * Execution : 1. default node cmd> node.couponNumber.js
 * @Purpose :To find coupon number.
 * @description :Given N distinct Coupon Numbers, how many random numbers do you need to generate distinct
 * coupon number? This program simulates this random process.
 * @overview    :Generate n random numbers and find the user entered number
 * @file : couponNumber.js
 * @author : Tejaswini
 * @version : 1.0.0
 * @since : 9-07-2020
 */
const readline = require("readline-sync");
const util = require("./couponNumberBL");
try {
  let couponNumber = readline.question("Enter coupon no : ");
  let reg = new RegExp("^$|^([w.-]+)@([w-]+)((.(w){2,3}[a-zA-Z])+)$");
  let regex = new RegExp("^[a-zA-Z]+$");
  if (reg.test(couponNumber)) {
    throw "input should not be empty";
  } else if (regex.test(couponNumber)) {
    throw "input must be number type"
  }
  let arr = util.toFindCouponNumber(couponNumber);
  let set = new Set(arr);
  console.log("random distinct numbers in " + set.size + 1 + " attempt");
} catch (err) {
  console.log;
}
