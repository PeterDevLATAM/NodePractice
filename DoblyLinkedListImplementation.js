const util = require("util");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);

    newNode.prev=this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // console.log(this);
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev= newNode;
    this.head = newNode;
    this.length++;

    // console.log(
    //   util.inspect(this, { showHidden: false, depth: null, colors: true })
    // );
    return this;
  }
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
    return arr;
  }
  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this._traverseListToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev=leader;
    newNode.next = follower;
    follower.prev= newNode;
    this.length++;
    return this;
  }
  remove(index) {
    //check params
    const leader = this._traverseListToIndex(index - 1);
    const holderPointer = leader.next.next;
    leader.next = holderPointer;
    holderPointer.prev= leader;
    this.length--;
    return this.printList()
  }
  _traverseListToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 9);
myLinkedList.remove(2);

// myLinkedList.printList();
