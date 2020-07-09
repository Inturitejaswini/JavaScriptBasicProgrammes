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