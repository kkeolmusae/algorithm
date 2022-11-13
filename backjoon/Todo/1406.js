const input = require("fs").readFileSync("../input.txt").toString().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.cursor = new Node();
    this.length = 0;
  }

  /**
   * B: 커서 왼쪽의 문자를 삭제함
   * 커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
   * 삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
   */
  delete() {
    if (!this.cursor.left) return;

    const delNode = this.cursor.left;

    if (delNode.left) delNode.left.right = delNode.right;

    if (delNode.right) delNode.right.left = delNode.left;

    this.cursor.left = delNode.left;
    this.cursor.right = delNode.right;

    if (!this.cursor.left && !this.cursor.right) this.head = null;
    else if (!this.cursor.left && this.cursor.right) this.head = this.cursor.right;

    this.length--;
  }

  /**
   * P $ : 커서 왼쪽에 문자를 삽입함
   * $라는 문자를 커서 왼쪽에 추가함
   */
  insert(value) {
    const newNode = new Node(value);

    newNode.left = this.cursor?.left;
    newNode.right = this.cursor?.right;
    if (this.cursor?.left) {
      this.cursor.left.right = newNode;
    } else {
      this.head = newNode;
    }

    if (this.cursor?.right) {
      this.cursor.right.left = newNode;
    }
    this.cursor.left = newNode;
    this.cursor.right = newNode.right;

    this.length++;
  }

  // L
  cursorLeft() {
    const cursorLeftNode = this.cursor.left;
    if (cursorLeftNode) {
      this.cursor.left = cursorLeftNode.left;
      this.cursor.right = cursorLeftNode;
    }
  }

  // D
  cursorRight() {
    const cursorRightNode = this.cursor.right;
    if (cursorRightNode) {
      this.cursor.right = cursorRightNode.right;
      this.cursor.left = cursorRightNode;
    }
  }

  print() {
    let node = this.head;
    let str = "";
    while (node) {
      str += node.value;
      node = node.right;
    }
    // const result = `
    // str : ${str}
    // left : ${this.cursor.left?.value}
    // right : ${this.cursor.right?.value}
    // `;
    // return result;
    return str;
  }

  /**
   * L	커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
   * D	커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
   */
}

const [initString, count, ...cmds] = input;
const linkedList = new LinkedList();

for (const str of initString.split("")) {
  linkedList.insert(str);
}

// console.log(linkedList.print());

for (let idx = 0; idx < count; idx++) {
  const cmd = cmds[idx];
  // console.log(`cmd : ${cmd}`);
  if (cmd === "L") linkedList.cursorLeft();
  else if (cmd === "D") linkedList.cursorRight();
  else if (cmd === "B") linkedList.delete();
  else if (cmd.split(" ")[0] === "P") {
    linkedList.insert(cmd.split(" ")[1]);
  }
  // console.log(linkedList.print());
}
console.log(linkedList.print());

// console.log(linkedList.print());
// yxabc
