/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * Input: root = [2,1,3]
 * Output: true
 *
 * Input: root = [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is 4.
 *
 *
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (list) {
  let queue = [new Node(list.shift())];

  while (queue.length > 0) {
    const current = queue.shift();
    const left = list.shift();
    const right = list.shift();
    current.left = left === undefined ? null : new Node(left);
    current.right = right === undefined ? null : new Node(right);
    if (current.left != null) {
      if (current.value < current.left.value) {
        return false;
      }
      queue.push(current.left);
    }
    if (current.right != null) {
      if (current.value > current.right.value) {
        return false;
      }
      queue.push(current.right);
    }
  }
  return true;
};

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = [5, 1, 4, null, null, 3, 6];
const root3 = [5, 4, 7, null, null, 6, 8];

console.log(isValidBST(root3));
