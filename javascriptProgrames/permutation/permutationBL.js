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
    let holder;
    for (let i = 0; i < fact; i++) {
      for (let j = 0; j < string.length; j++) {
         replacedString = string.replace(string[k], string[j]);
        console.log(replacedString);
      }
      (k === string.length) ? (k = 0) : k++;
    }
  }
};
