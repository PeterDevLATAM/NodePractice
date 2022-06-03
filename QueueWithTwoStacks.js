class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  peek() {
    return this.s1[this.s1.length - 1];
  }
  push(value) {
    if (this.s1.length !== 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
        console.log(this.s2);
      }
      this.s1.push(value);
      while (this.s2.length > 0) {
        this.s1.push(this.s2.pop());
      }
    } else {
      this.s1.push(value)
    }

    return this;
  }
  pop() {
    this.s1.pop();
    console.log(this)
    return this;
  }
  //isEmpty
}

const myQueue = new Queue();
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
myQueue.pop()
myQueue.pop()
myQueue.pop()
