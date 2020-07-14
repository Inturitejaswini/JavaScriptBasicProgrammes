/**
 * Execution   : default node    cmd>node.stockReport.js
 * 
 * purpose     : to find total share of each stock and total price of all the stock
 * 
 * @description :Write a program to read in Stock Names, Number of Share, Share Price. Print a Stock Report with total value of each Stock and the total value of Stock.
 * @file        :stockReport.js
 * @overview    :using json to retrive data and using several condtion to display the data
 * @author      :Tejaswini
 * @version     :1.0
 * @since       :13-07-2020
 * */
const util = require('./stockReportBL');
const fs = require('fs');
try{
let input = JSON.parse(fs.readFileSync('./stockReport.json'));
util.stockAccountManagement(input);
}catch(err){
    console.log(err);
}