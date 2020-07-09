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
    }