 /** 
  @purpose :To find coupon number.
  @Auther :Tejaswini
  @version:  1.0
  @return 
  @Since : 9-07-2020
  **/
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