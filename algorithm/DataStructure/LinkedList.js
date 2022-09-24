// 참고 https://soldonii.tistory.com/73?category=862199

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // 뒤에 붙임
  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.taile = newNode;
    this.length++;
    return this.printList();
  }

  // 앞에 붙임
  prepend(value) {
    const newNode = {
      value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  insert(idx, value) {
    if (idx >= this.length) {
      return this.append.value;
    }

    const newNode = {
      value,
      next: null,
    };

    const prevNode = this.traverseToIdx(idx - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this.printList();
  }

  traverseToIdx(idx) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== idx) {
      // idx의 노드가 나올때까지 순환
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(idx) {
    const prevNode = this.traverseToIdx(idx - 1);
    const trashNode = prevNode.next;
    const nextNode = trashNode.next;

    prevNode.next = nextNode;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
myLinkedList.printList();
