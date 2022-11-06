function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let tempMaxNum = 0;
  let maxNum = 0;
  for (let idx = 0; idx < num; idx++) {
    tempMaxNum += arr[idx];
  }

  for (let idx = num; idx < arr.length; idx++) {
    tempMaxNum = tempMaxNum + arr[idx] - arr[idx - num];
    maxNum = Math.max(tempMaxNum, maxNum);
  }
  return maxNum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
