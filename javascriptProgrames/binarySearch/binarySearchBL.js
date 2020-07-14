/**
 * @author: Tejaswini
 * @purpose : This function is use to find the search iteam into the sorted array using Binary Search for String!!
 * @Since : 9-07-2020
 * @param {Sorted Array} sortArray
 * @param {Search item} input
 */
exports.binarySearch = (sortArray, input) => {
  try {
    let front = 0,
      end = sortArray.length - 1,
      mid = Math.floor((front + end) / 2);
    console.log(sortArray);
    while (front <= end && sortArray[mid] != input) {
      input < sortArray[mid] ? (end = mid - 1) : (front = mid + 1);
      mid = Math.floor((front + end) / 2);
    }
    console.log(mid);
    return sortArray[mid] != input ? -1 : mid + 1;
  } catch (error) {
    return error;
  }
};
