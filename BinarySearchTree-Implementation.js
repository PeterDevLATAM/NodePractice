const util = require("util");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.value > newNode.value) {
          // go left
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //go right
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {}
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(20);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(15);

console.log(
  util.inspect(tree.insert(170), {
    showHidden: false,
    depth: null,
    colors: true,
  })
);
