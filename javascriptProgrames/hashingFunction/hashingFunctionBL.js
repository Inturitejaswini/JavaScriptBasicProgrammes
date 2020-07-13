/**
 * @Auther :Tejaswini
 * @module hashingFunction
 * @param {userInput} data.
 * @purpose : this function is use to check entered user input data is used to store and fetch the no from file.
 * @Since : 13-07-2020
 */
exports.hashingFunction = (data) => {
  class HashTable {
    constructor() {
      this.buckets = new Array(21);
    }
    hash(data) {
      return data % 21;
    }
    set(key, value) {
      let index = this.hash(key);
      this.buckets[index] = value;
    }
    get(key) {
      const index = this.hash(key);
      return this.buckets[index];
    }
  }
  let hashTable = new HashTable();
  let i = 0;
  while (i < data.length) {
    hashTable.set(data[i], data[i]);
    i++;
  }
  console.log(hashTable.get(12));
};
