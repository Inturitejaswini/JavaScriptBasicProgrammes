/**
 * @module(stake,goal,num)as perameters to find the gambler num.
 */
exports.gambler = (stake, goal, num) => {
  let [wins, bets] = [0, 0];
  for(let i in num) {
    console.log(num);
    let temp = stake;
    while (temp > 0 && temp < goal) {
      bets++;
      let result = Math.random() < 0.5 ? temp++ : temp--;
      console.log(result);
    }
    if (temp == goal) {
      wins++;
    }
  };
  return wins;
};
