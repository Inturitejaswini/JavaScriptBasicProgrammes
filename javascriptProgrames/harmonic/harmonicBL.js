/**
 * @Auther :Tejaswini
 * @param { User input } nthNum
 * @purpose : this function is use to find the harmonic number for an given user input.
 * @Since : 10-07-2020
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