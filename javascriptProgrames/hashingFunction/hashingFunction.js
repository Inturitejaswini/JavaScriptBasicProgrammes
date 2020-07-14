/**
 * Execution   : default node    cmd>node.hashingFunction.js
 *
 * purpose     : to store and fetch the no from file
 *
 *
 * @description :Create a Slot of 10 to store Chain of Numbers that belong to each Slot to efficiently search a number from a given set of number.
 * @file        :hashingFunction.js
 * @overview    :using hashmap datastructure in order to complete the task
 * @author      :Tejaswini
 * @version     :1.0
 * @since       :13-07-2020
 * */
const util = require("./hashingFunctionBL");
try {
  const fs = require("fs");
  let content = fs.readFileSync("hashingFunction.txt", "utf8");
  util.hashingFunction(content.split(","));
} catch (error) {
  console.log(error);
}
