console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)); // -1

function binarySearch(arr, num) {
  let lowIdx = 0;
  let highIdx = arr.length - 1;
  let midIdx = Math.ceil((highIdx + lowIdx) / 2);

  if (arr[highIdx] < num || arr[lowIdx] > num) return -1;

  while (num !== arr[[midIdx]]) {
    if (lowIdx > highIdx) return -1;
    if (num > arr[midIdx]) {
      lowIdx = midIdx + 1;
    } else if (num < arr[midIdx]) {
      highIdx = midIdx - 1;
    }
    midIdx = Math.ceil((highIdx + lowIdx) / 2);
  }
  return midIdx;
}
