/**
 * 2 ways of traversing a tree.
 * - Breadth First Search (BFS)
 * - Depth First Search (DFS)
 *
 * DFS
 * - InOrder : traverse from the left subtree to the root then to the right subtree.
 * - PreOrder : traverse from the root to the left subtree then to the right subtree.
 * - PostOrder : traverse from the left subtree to the right subtree then to the root.
 *
 */

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

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (current.value < newNode.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  /**
   * DFS - PreOrder (Steps - Recursively)
   * - Create a variable to store the values of nodes visited
   * - Store the root of the BST in a variable called current.
   * - Write a helper function which accepts a node
   * > - Push the value of the node to the variable that stores the values.
   * > - If the node has a left property, call the helper function with the left property on the node.
   * > - If the node has a right property, call the helper function with the right property on the node.
   */
  DFSPreOrder() {
    const data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

  /**
   * DFS - PostOrder (Steps - Recursively)
   * - Create a variable to store the values of nodes visited
   * - Store the root of the BST in a variable called current.
   * - Write a helper function which accepts a node
   * > - If the node has a left property, call the helper function with the left property on the node.
   * > - If the node has a right property, call the helper function with the right property on the node.
   * > - Push the value of the node to the variable that stores the values.
   * > - Invoke the helper function with the current variable.
   * - Return the array of values.
   */
  DFSPostOrder() {
    const data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(current);
    return data;
  }

  /**
   * DFS - InOrder (Steps - Recursively)
   * - Create a variable to store the values of nodes visited
   * - Store the root of the BST in a variable called current.
   * - Write a helper function which accepts a node
   * > - If the node has a left property, call the helper function with the left property on the node.
   * > - Push the value of the node to the variable that stores the values.
   * > - If the node has a right property, call the helper function with the right property on the node.
   * - Invoke the helper function with the current variable.
   * - Return the array of values.
   */
  DFSInOrder() {
    const data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }
}

function prettyLog(title, result) {
  console.log();
  console.log(title);
  console.log(result);
  console.log();
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
prettyLog("DFS-PreOrder", tree.DFSPreOrder());
prettyLog("DFS-PostOrder", tree.DFSPostOrder());
prettyLog("DFS-InOrder", tree.DFSInOrder());
