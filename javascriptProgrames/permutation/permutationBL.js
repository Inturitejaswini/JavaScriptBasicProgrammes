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
    let result = (k === string.length) ? (k = 0) : k++;
    console.log(result);
  }
};
