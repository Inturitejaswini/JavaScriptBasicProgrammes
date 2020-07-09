/**
 * @module(stake,goal,num)as perameters to find the gambler num.
 */
exports.gambler = (stake, goal, num) => {
    let [wins, bets] = [0, 0];
    for (let i = 0; i < num; i++) {
        let temp = stake;
        while (temp > 0 && temp < goal) {
            bets++;
            if (Math.random() < 0.5) {
                temp++;
            }
            else {
                temp--;
            }
        }
        if (temp == goal) {
            wins++;
        }
    }
    return wins;
}