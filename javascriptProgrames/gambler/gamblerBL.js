/**
 * @author: Tejaswini
 * @Purpose : To find percentage of wins and loss given the stake and number of attempts
 * @Since : 10-07-2020
 */

exports.gambler = (stake, goal, num) => {
  let [wins, bets] = [0, 0];
  let i=0;
  for (let i = 0; i < num; i++) {
    let temp = stake;
    while (temp > 0 && temp < goal) {
      bets++;
      Math.random() < 0.5 ? temp++ : temp--;
    }
    if (temp == goal) {
      wins++;
    }
  }
  return wins;
};
