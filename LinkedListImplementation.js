// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
const util = require("util");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // console.log(this);
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this; 
  }
  remove(index) {
    //check params
    const leader = this._traverseListToIndex(index - 1);
    const holderPointer = leader.next.next;
    leader.next=holderPointer;
    this.length--;
    return this
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
  reverse(){
    //check params 
    if(!this.head.next){
      return this.head;
    }

    let current = this.head;
    let prev = null;
    let next;

    while (current!==null){
      next= current.next
      current.next= prev;
      prev=current;
      current= next;
    }
    this.tail=this.head
    this.head=prev;
    
    console.log(
      util.inspect(this, { showHidden: false, depth: null, colors: true })
    );
    return this;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 9);

myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();

// myLinkedList.printList();
