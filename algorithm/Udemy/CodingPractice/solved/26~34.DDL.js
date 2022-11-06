class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const prevNode = poppedNode.prev;
      prevNode.next = null;
      poppedNode.prev = null;
      this.tail = prevNode;
    }

    this.length--;
    return poppedNode;
  }
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
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

  shift() {
    if (!this.head) return undefined;

    const oldHeadNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const nextHeadNode = oldHeadNode.next;
      nextHeadNode.prev = null;
      this.head = nextHeadNode;
    }
    this.length--;
    return oldHeadNode;
  }

  set(idx, val) {
    if (idx < 0 || this.length <= idx) return false;

    let count = 0;
    let currNode = this.head;
    while (idx !== count) {
      currNode = currNode.next;
      count++;
    }

    currNode.val = val;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;

    let currNode = this.head;
    let count = 0;
    while (idx !== count) {
      currNode = currNode.next;
      count++;
    }
    const prevNode = currNode.prev;
    prevNode.next = currNode.next;
    currNode.next.prev = prevNode;

    this.length--;

    return currNode;
  }

  pop() {
    if (this.length === 0) return undefined;

    const tailNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const prevNode = tailNode.prev;
      prevNode.next = null;
      this.tail = prevNode;
    }
    this.length--;
    return tailNode;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let currNode = this.head;
    let cnt = 0;
    while (cnt !== idx) {
      currNode = currNode.next;
      cnt++;
    }
    return currNode;
  }

  reverse() {
    let currNode = this.head;
    this.head = this.tail;
    this.tail = currNode;

    let nextNode;
    let prevNode = null;
    for (let idx = 0; idx < this.length; idx++) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      currNode.prev = nextNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    /**     t              c
     *      5 10 15 20 25 30
     *                  p c n
     */
    return this;
  }
}
try {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.push(5).push(10).push(15).push(20);
  doublyLinkedList.reverse(); // singlyLinkedList;
  console.log(doublyLinkedList.length);
  console.log(doublyLinkedList.head.val);
  console.log(doublyLinkedList.head.next.val);
  console.log(doublyLinkedList.head.next.next.val);
  console.log(doublyLinkedList.head.next.next.next.val);
} catch (err) {
  console.error(`error ${err}`);
}
