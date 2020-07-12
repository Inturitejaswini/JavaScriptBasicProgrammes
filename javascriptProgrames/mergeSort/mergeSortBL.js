/**
 * @author: Tejaswini
 * @purpose : To find the sorted array using the sorting technique called "Merge Sort"
 * @Since : 10-07-2020
 * @param { User input } array
 */
exports.mergeSort = (array) => {
  function dividing(array) {
    if (array.length < 2) {
      return array;
    }
    let mid = Math.floor(array.length / 2);
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid, array.length);
    return conquer(dividing(leftArray), dividing(rightArray));
  }
  function conquer(leftArray, rightArray) {
    let sortedArray = [];
    while (leftArray.length > 0 && rightArray.length > 0)
      sortedArray.push(
        leftArray[0] < rightArray[0] ? leftArray.shift() : rightArray.shift()
      );
    return sortedArray.concat(leftArray.length ? leftArray : rightArray);
  }
  console.log(dividing(array));
};
