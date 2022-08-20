function maxSubarraySum(arr, windowSize) {
  if (arr.length < windowSize) return null;

  let tempMax = 0;
  for (let num = 0; num < windowSize; num++) {
    tempMax += arr[num];
  }

  let max = 0;
  for (let idx = windowSize; idx < arr.length; idx++) {
    tempMax = tempMax + arr[idx] - arr[idx - windowSize];
    max = Math.max(tempMax, max);
  }
  // console.log(max);
  return max;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
