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
 *
 * insert : Adding a node to the Linked List at the specific position.
 * - If the index is less than zero or grater than the length, return false.
 * - If the index is the same as the length, push a new node to the end of the list.
 * - If the index is 0, unshift a new node to the start of the list
 * - Otherwise, using the get method, access the node at the index-1
 * - Set the next property on that node to be the new node.
 * - Set the next property on the new node to be the previous next.
 * - Increment the length.
 * - Return true.
 *
 * remove : Repmoving a node from the Linked List at a specific position.
 * - If the Index is less than zero or greater than the length, return undefined.
 * - If the index is the same ase the length-1, pop
 * - If the index is 0, shift.
 * - Otherwise, using the get method, access the node at the index - 1.
 * - Set the next property on that node to be the next of the next node.
 * - Decrement the length.
 * - Return the value of the node removed.
 *
 * reverse : Reversing the Linked List in place!
 * - Swap the head and tail.
 * - Create a variable called next.
 * - Create a variable called prev.
 * - Crate a variable called node and initialize it to the head property.
 * - Loop through the list.
 * - Set next to be the next property on whatever node is.
 * - Set the next property on the node to be whatever prev is.
 * - Set prev to be the value of the node variable.
 * - Set the node variable to bn the value of the next variable.
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

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) !!this.unshift(val);
    if (idx === this.length) !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);
    const nextNode = prevNode.next;

    newNode.next = nextNode;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    const prevNode = this.get(idx - 1);
    const currentNode = prevNode.next;
    prevNode.next = currentNode.next;
    this.length--;
    return currentNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let nextNode;
    let prevNode = null;
    for (let idx = 0; idx < this.length; idx++) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }
    return this;
  }
}

//               A      ->      B       ->      C        ->       D
// null         node          next
//                t                                                 h
