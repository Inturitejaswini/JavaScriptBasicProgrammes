const readline = require("readline-sync");
const util = require("./queueBL");
try {
  let bankStatus = readline.question(
    "Hello Do you like to withdraw or deposit :"
  );
  let reg = new RegExp("^$|^([w.-]+)@([w-]+)((.(w){2,3})+)$");
  if (reg.test(bankStatus)) {
    throw new error("give valid input");
  }
  util.queue(bankStatus);
} catch (error) {
throw error
}
