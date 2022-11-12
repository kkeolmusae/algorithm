function binarySearch(arr, value) {
  let minIdx = 0;
  let maxIdx = arr.length - 1;

  while (minIdx < maxIdx) {
    const middleIdx = Math.floor((minIdx + maxIdx) / 2);
    if (arr[middleIdx] > value) {
      maxIdx = middleIdx;
    } else if (arr[middleIdx] < value) {
      minIdx = middleIdx;
    } else {
      return middleIdx;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
