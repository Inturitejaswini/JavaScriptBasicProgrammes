/**
 * @module(String,String)string1,string2 - used for checking anagram
 */
exports.checkAnagram = (string1, string2) => {
    try {
        string1 = string1.split('');
        string2 = string2.split('');
        if (string1.length === string2.length) {
            let count = 0;
            for (let i = 0; i < string1.length; i++) {
                for (let j = 0; j < string2.length; j++) {
                    if (string1[i] === string2[j]) {
                        string2[j] = undefined;
                        count++;
                    }
                }
            }
            result=(count === string1.length) ? 'anagram' :'not an anagrame';
        } else {
            console.log('not a Anagram');

        }
    } catch (error) {
        return error;
    }
},

    /**
     * @module(number)couponNumber as user input
     */
    exports.toFindCouponNumber = (couponNumber) => {
        try {
            let arr = new Array();
            while (true) {
                let randomCouponNumber = Math.round(Math.random() * couponNumber);
                arr.push(randomCouponNumber);
                if (couponNumber == randomCouponNumber) {
                    break;
                }
            }
            return arr;
        } catch (error) {
            return error;
        }
    },

    /**
     * @module(number)nthNumber as-user input
     */
    exports.harmonicNumber = (nthNum) => {
        try {
            let value = 1;
            for (let index = 2; index <= nthNum; index++) {
                value = value + 1 / index;
            }
            console.log(value);
        } catch (error) {
            return error;
        }
    }

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

/**
 * @module(Array,input)sortArray,
 * input - sorted array and user input. 
 */
exports.binarySearch = (sortArray, input) => {
    try {
        let front = 0, end = sortArray.length - 1, mid = Math.floor((front + end) / 2);
        console.log(sortArray);
        while (front <= end && sortArray[mid] != input) {
            if (input < sortArray[mid]) {
                end = mid - 1;
            } else {
                front = mid + 1;
            }
            mid = Math.floor((front + end) / 2);
        }
        console.log(mid);
        return (sortArray[mid] != input) ? -1 : mid + 1;
    } catch (error) {
        return error;
    }

}

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
        for (let i = 0; i < fact; i++) {
            for (let j = 0; j < string.length; j++) {
                let replacedString = string.replace(string[k], string[j]);
                console.log(replacedString);
            }
            if (k === string.length) {
                k = 0;
            } else {
                k++;
            }
        }
    }
}