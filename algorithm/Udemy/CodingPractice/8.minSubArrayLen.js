function minSubArrayLen(arr, num) {
  let minCount = Infinity;

  let sum = 0;
  let endIdx = 0;
  let startIdx = 0;
  while (startIdx < arr.length) {
    if (sum < num && endIdx < arr.length) {
      sum += arr[endIdx];
      endIdx++;
    } else if (sum >= num) {
      minCount = Math.min(minCount, endIdx - startIdx);
      sum -= arr[startIdx];
      startIdx++;
    } else {
      break;
    }
  }
  return minCount !== Infinity ? minCount : 0;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
