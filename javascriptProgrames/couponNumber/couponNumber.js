const readline = require('readline-sync');
const util = require('./couponNumberBL');
// try{
let couponNumber = readline.question('Enter coupon no : ');
if (couponNumber === '') {
    console.log('Give valid input');
} else {
    let arr = util.toFindCouponNumber(couponNumber)
    let set = new Set(arr);
    console.log('random distinct numbers in' + set.size + 1 + ' attempt'); 
}
// }catch(err){
//     console.log
// }