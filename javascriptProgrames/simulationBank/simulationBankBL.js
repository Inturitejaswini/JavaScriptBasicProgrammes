const readline = require("readline-sync");
exports.queue = (bankStatus) => {
  class Queue {
    constructor() {
      this.queue = [];
    }
    enqueue(data) {
      this.queue.push(data);
    }
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue underflow");
      }
      return this.queue.shift();
    }
    isEmpty() {
      if (this.queue.length === 0) {
        return true;
      }
      return false;
    }
    front() {
      if (this.isEmpty()) {
        console.log("no data is present in queue");
      }
      return this.queue[0];
    }
    printQueue() {
      let string = "";
      let i = 0;
      while (i < this.queue.length) {
        string = string + this.queue[i] + " ";
        i++;
      }
      console.log(string);
    }
  }
  
};
