/**
 * Doubly Linked List
 *
 * push(value) method : Adding a node ffrom the end of the Doulby Linked List.
 * - Create a new node with the value passed to the function.
 * - If the head property is null set the head and tail to be the newly created node.
 * - If not, set the next property on the tail to be that node.
 * - Set the previous property on the newly created node to be the tail
 * - Set the tail to be the newly created node.
 * - Increment the length.
 * - Return the Doulby Linked List.
 *
 * pop() method : Removing a node from the end of the Doulby Linked List.
 * - If there is no head, return undefined.
 * - Store the current tail in a variable to return later.
 * - If the length is 1, set the head and tail to be null.
 * - Update the tail to be the previous Node.
 * - Set the newTail's next to null.
 * - Decrement the length.
 * - Return the value removed.
 *
 * shift() method : Removing a node from the beginning of the Doulby Linked List.
 * - If length is 0, return undefined.
 * - Store the current head property in a variable (we'll call it old head)
 * - If the length is one,
 * -- set the ehad to be null.
 * -- set the tail to be null.
 * - Update the head to be the next of the old head.
 * - Set the head's prev property to null.
 * - Set the old head's next to null.
 * - Decrement the length.
 * - Return old head.
 *
 * unshift() method : Adding a node to the beginning of the Doubly Linked List.
 * - Create a new node with the value passed to the function.
 * - If the length is 0,
 * -- Set the ehad to be the new node.
 * -- Set the tail to be the new node.
 * - Otherwise
 * -- Set the prev property on the head of the list to be the new node.
 * -- Set the next property on the new node to be the head property.
 * - Increment the length.
 * - Return the list
 *
 * get(idx) method : Accessing a node in a Doulby Linked List by its position.
 * - If the index is less than 0 or greater or equal to the length, return null.
 * - If the index is less than or equal to half the length of the list
 * -- Loop through the list starting from the head and loop towards the middle.
 * -- Return the node once it is found
 * - If the index is greater than half the length of the list,
 * -- Loop through the list starting from the tail and loop towards the middle.
 * -- Return the node once it is found
 *
 * set(idx, value) method : Replacing the value of a node to the in a Doulby Linked List.
 * - Create a variable which is the result of the get method at the index passed to the function.
 * -- If the get method returns a valid node, set the value of that node to be the value passed to the function.
 * -- Return true.
 * - Otherwise, return false.
 *
 * insert(idx, value) method : Adding a node in a Doulby Linked List by a certain position.
 * - If the index is less than zero or grater than the length, return false.
 * - If the index is 0, unshift
 * - If the index is the same as the length, push
 * - Use the get method to access the node at the index-1
 * - Set the next and prev properties on the correct nodes to linke everything together.
 * - Increment the length.
 * - Return true.
 *
 * remove(idx, value) method : Removing a node in a Doulby Linked List by a certain position
 * - If the Index is less than zero or greater than the length, return undefined.
 * - If the index is 0, shift.
 * - If the index is the same ase the length-1, pop
 * - Use the the get method to retrieve the itme to be removed.
 * - Update the next and prev properties to remove the found node from the list.
 * - Set next and prev to null on the found node.
 * - Decrement the length.
 * - Return the removed node.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head || this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head || this.length === 0) {
      console.log("LinkedList length is zero");
      return undefined;
    }

    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head || this.length === 0) {
      console.log("LinkedList length is zero");
      return undefined;
    }

    if (this.length === 1) {
      this.pop();
    } else {
      const shiftedNode = this.head;
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
      this.length--;

      return shiftedNode;
    }
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) {
      console.log(`idx is less than zero or more than node's length`);
      return null;
    }

    let count, current;
    if (idx <= this.length / 2) {
      console.log("Working from start.");
      count = 0;
      current = this.head;

      while (count !== idx) {
        current = current.next;
        count++;
      }
    } else {
      console.log("Working from end.");
      count = this.length - 1;
      current = this.tail;

      while (count !== idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(idx, val) {
    const currentNode = this.get(idx);
    if (!currentNode) return false;
    currentNode.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;

    nextNode.prev = newNode;
    newNode.next = nextNode;

    this.length++;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const removedNode = this.get(idx - 1);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

  printNode() {
    let current = this.head;
    let idx = 0;
    while (current) {
      console.log(`
      current Node idx : ${idx}
      current Node value : ${current.val}
      `);
      current = current.next;
      idx++;
    }
  }
}
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.printNode();
