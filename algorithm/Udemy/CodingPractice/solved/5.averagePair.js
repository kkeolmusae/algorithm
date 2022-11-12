function averagePair(arr, num) {
  if (!arr.length) {
    return false;
  }
  let startIdx = 0;
  let endIdx = arr.length - 1;
  while (startIdx < endIdx) {
    const aver = (arr[startIdx] + arr[endIdx]) / 2;
    if (aver > num) {
      endIdx--;
    } else if (aver < num) {
      startIdx++;
    } else {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
