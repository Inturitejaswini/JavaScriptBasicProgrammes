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
