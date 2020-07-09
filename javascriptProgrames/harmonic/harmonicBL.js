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