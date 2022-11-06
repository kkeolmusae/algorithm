/**
 * Queue : Data structure following the format FIFO(First In First Out)
 * - This function accepts some value
 * - Create a new node using that value passed to the function
 * - If there are no nodes in the queue, set this node to be the first and last property of the queue
 * - Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
 *
 * - Enqueue()： Function to insert data.
 * - Dequeue()： Function to delete data.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return newNode;
  }

  dequeue() {
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
