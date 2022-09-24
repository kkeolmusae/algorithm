/**
 * Kind of Tree
 *
 * - Trees
 * - Binary Trees
 * - Binary Search Trees
 * - ...
 *
 */

/**
 * Binary Serach Trees (BSTS)
 *
 * - Every parent node has at most 2 child.
 * - Every node to the left of a parent node is always less than the parent.
 * - Every node to the right of a parent node is always greater than the parent.
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

  /**
   * Insert (Steps - Iteratively or Recursively)
   * 1. Create a new node.
   * 2. Starting at the root
   * 3. Check if there is a root, if not, the root now becomes that new node!
   * 4. If there is a root, check if the value of the new node is greater than or less than the value of the root.
   *
   * > If it is greater, Check to see if there is a node to the right.
   * >- If there is, move to that node and repeat theses steps.
   * >- If there is not, add that node as the right property.
   *
   * > If it is less, Check to see if there is a node to the left.
   * >- If there is, move to that node and repeat theses steps.
   * >- If there is not, add that node as the left property.
   */
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
   * Finding (Steps - Iteratively or Recursively)
   * 1. Check if there is a root, if not, we're done searching.
   * 2. If there is a root, check if the value of the new node is the value we are looking for.
   * >- If we found it, we're done!
   * 3. If not, check to see if the value is greater than or less than the value of the root.
   * 4. If it is greater, Check to see if there is a node to the right.
   * >- If there is , move to that node and repeat theses steps.
   * >- If there is not, we're done searching.
   * 5. If it is less, Check to see if there is a node to the right.
   * >- If there is , move to that node and repeat theses steps.
   * >- If there is not, we're done searching.
   */
  find(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  print() {
    return this;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.find(3));
