/**
 * Execution   : default node    cmd>node.simulationBank.js
 * 
 * purpose     : withdraw or deposit amount
 * 
 * 
 * @description :Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash. Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people. Maintain the Cash Balance.
 * @file        :simulationBank.js
 * @overview    :using queue to perform those operation 
 * @author      :Tejaswini
 * @version     :1.0
 * @since       :13-07-2020
 * */
const readline = require("readline-sync");
const util = require("./simulationBankBL");
try{
let bankStatus = readline.question(
  "Hello Do you like to withdraw or deposit :"
);
let reg = new RegExp("^$|^([w.-]+)@([w-]+)((.(w){2,3}[A-Za-z])+)$");
if (reg.test(bankStatus)) {
  console.log("give valid input");
}
util.queue(bankStatus);
}
catch(error){
    console(error);
}
