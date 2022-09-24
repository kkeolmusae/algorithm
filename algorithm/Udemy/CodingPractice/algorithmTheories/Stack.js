/**
 * Stack : Data structure following the format LIFO(Last In First Out)
 *
 * Push
 * - The function should accept a value.
 * - Create a new node with that value.
 * - If there are no nodes in the stack, set the first and last property to be the newly created node.
 * - If there is at least one node, create a variable that stores the current first property on the stack.
 * - Reset the first property to be the newly created node.
 * - Set the next property on the node to be the previously created variable.
 * - Increment the size of the stack by 1.
 *
 * Pop
 * - If thre are no nodes in the stack, return null.
 * - Create a temporary variable to store the first property on the stack.
 * - If there is only 1 node, set the first and last property to be null.
 * - If there is more than one node, set the first property to be the next property on the current first.
 * - Decrement the size by 1.
 * - Return the value of the node removed.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return this.size++;
  }

  pop() {
    if (this.size === 0) return null;
    const temp = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return temp.value;
  }
}
