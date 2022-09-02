/**
 * Singly Linked List
 *
 * push(value) method pseudocode
 * - This function should accept a value.
 * - Create a new node using the value passed to the function
 * - If there is no head property on the list, set the head and tail to be the newly created node.
 * - Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
 * - Increment the length by one.
 * - Return the linked list.
 *
 * pop() method psudocode
 * - If there are no nodes in the list, return undefined.
 * - Loop through the list until you reach the tail.
 * - Set the next property of the 2nd to last node to be null.
 * - Set the tail to be the 2nd to last node.
 * - Decrement the length of the list by 1.
 *
 * shift() : removing a new node from the beginning of the Liknked List.
 * - If there are no nodes, return undefined.
 * - Sotre the current head property in a variable.
 * - Set the head property to be the current head's next property.
 * - Decrement the length by 1.
 * - Return the value of the node removed.
 *
 * unshift(value) : Adding a new node the the beginning of the Linked List.
 * - This function should accept a value
 * - Create a new node using the value passed to the function.
 * - If there is no head property on the list, set the head and tail to be the newly creatd node.
 * - Otherwise set the newly created node's next property to be the current head property on the list.
 * - Increment the length by 1.
 * - Return the linked list.
 *
 * get(index)
 * - This function should accept an index.
 * - If the index is less than zero or greater than or equeal to the length of the list, return null.
 * - Loop through the list until you reach the index and return the node at that specific index.
 *
 * set(index, value) : Changing the value of a node based on it's position in the Linked List.
 * - This function should accept a value and an index.
 * - Use your get function to find the specific node.
 * - If the node is not found, return false.
 * - If the node is found, set the value of that node to be the value passed to the function and return treu.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    if (this.length === 0) {
      console.log("LinkedList length is zero");
      return undefined;
    }

    let current = this.head;
    let prev = this.head;

    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    // node is not exist
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (this.length === 0) return undefined;

    const currentNode = this.head;
    this.head = currentNode.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return currentNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== idx) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(idx, val) {
    const currentNode = this.get(idx);
    if (!currentNode) return false;
    currentNode.val = val;
    return true;
  }
}
