/**
 * Execution   : default node    cmd>node.mergeSort.js
 *
 * purpose     : To find the sorted array using the sorting technique called "Merge Sort".
 *
 * @description :program to do Merge Sort of list of numbers.
 * @file        :mergeSort.js
 * @overview    :sorting using merge sort algorithm
 * @author      :Tejaswini
 * @version     :1.0
 * @since       :10-07-2020
 * */
const readline = require("readline-sync");
const input = require("./mergeSortBL");
try {
  let arr = [12, 43, 23, 3, 36, 45, 7, 11, 19];
  input.mergeSort(arr);
} catch (err) {
  console.log(err);
}
