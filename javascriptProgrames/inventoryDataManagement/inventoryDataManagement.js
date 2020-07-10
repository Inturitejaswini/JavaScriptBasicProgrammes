/**
 * Execution   : default node    cmd>node.inventoryDataManagement.js
 * 
 * purpose     : to find total cost for the inventory
 * 
 * @description :Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg.
 * @file        :inventoryDataManagement.js
 * @overview    :retriving data from json file and finding the amount
 * @author      :Tejaswini
 * @version     :1.0
 * @since       :10-07-2020
 * */
let input = require("readline-sync");
let inventoryObject = require("./inventoryDataManagementBL");
try {
  inventoryObject.inventory();
} catch (err) {
  console.log(err);
}
