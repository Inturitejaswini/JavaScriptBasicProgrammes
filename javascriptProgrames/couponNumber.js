const readline = require('readline-sync');
const access = require('../utility/utility');
let couponNumber = readline.question('Enter coupon no : ');
if (couponNumber === '') {
    console.log('Give valid input');

} else {
    let arr = access.toFindCouponNumber(couponNumber)
    let set = new Set(arr); //to store only unique datas
    console.log('You won in ' + set.size + 1 + ' attempt'); //to find the size of the array
}