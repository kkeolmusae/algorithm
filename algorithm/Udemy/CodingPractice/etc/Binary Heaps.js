/**
 * Binary Heap
 * Binary Search Tree와 비슷하다.
 * Max Binary Heap에서는 부모노드가 항상 자식 노드보다 큰 값을 가진다.
 *
 * Max Binary Heap
 * - Each parent has at most two child nodes.
 * - The value of each parent node is always greater than its child nodes.
 * - In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
 * - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.
 *
 * Min Binary Heap
 * - Each parent has at most two child nodes.
 * - The value of each parent node is always smaller than its child nodes.
 * - In a max Binary Heap the parent is smaller than the children, but there are no guarantees between sibling nodes.
 * - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.
 *
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [55, 39, 41, 18, 27, 12, 33];
    console.log(this.values);
  }

  insert(elem) {
    console.log(`before: ${this.values}`);
    this.values.push(elem);
    this.bubbleUp();
    console.log(`after: ${this.values}`);
  }

  bubbleUp() {
    let lastIdx = this.values.length - 1;
    let parentIdx = Math.floor(lastIdx - 1);

    while (true) {
      if (this.values[parentIdx] && this.values[lastIdx] > this.values[parentIdx]) {
        this.swap(this.values, lastIdx, parentIdx);
        lastIdx = parentIdx;
        parentIdx = Math.floor(lastIdx - 1);
      } else break;
    }
  }

  extractMax() {
    const firstIdx = 0;
    const lastIdx = this.values.length - 1;
    this.swap(this.values, firstIdx, lastIdx);
    this.values.pop();
    this.sinkingDown();
    console.log(this.values);
  }

  sinkingDown() {
    let parentIdx = 0;
    let leftChildIdx = parentIdx * 2 + 1;
    let rightChildIdx = parentIdx * 2 + 2;

    while (true) {
      if (this.values[leftChildIdx] > this.values[parentIdx] && this.values[leftChildIdx] > this.values[rightChildIdx]) {
        this.swap(this.values, leftChildIdx, parentIdx);
        parentIdx = leftChildIdx;
      } else if (this.values[rightChildIdx] > this.values[parentIdx] && this.values[rightChildIdx] > this.values[leftChildIdx]) {
        this.swap(this.values, rightChildIdx, parentIdx);
        parentIdx = rightChildIdx;
      } else {
        if (this.values.length === 2 && this.values[parentIdx] < this.values[leftChildIdx]) {
          this.swap(this.values, parentIdx, leftChildIdx);
        }
        break;
      }
      leftChildIdx = parentIdx * 2 + 1;
      rightChildIdx = parentIdx * 2 + 2;
    }
  }

  swap(arr, idx1, idx2) {
    const tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
  }
}

let heap = new MaxBinaryHeap();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
/**
 * 55, 39, 41, 18, 27, 12, 33
 * 0  1  2  3  4  5  6
 *      35
 *  20       33
 * 18 28   10
 */
