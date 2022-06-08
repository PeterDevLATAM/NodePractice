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
    }
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
  lookup(value) {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value===value) return currentNode;
      if (currentNode.value > value) {
        // go left
        currentNode = currentNode.left;
      } else {
        //go right
        currentNode = currentNode.right;
      }
    }
    return null
  }
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(traverse(tree.root));

console.log(tree.lookup(4))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
