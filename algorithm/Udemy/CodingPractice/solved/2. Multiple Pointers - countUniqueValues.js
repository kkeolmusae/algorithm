function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  let startIdx = 1;
  let tracerIdx = 0;
  while (startIdx < arr.length) {
    if (arr[startIdx] !== arr[tracerIdx]) {
      arr[tracerIdx + 1] = arr[startIdx];
      tracerIdx++;
    }
    startIdx++;
  }
  return tracerIdx + 1;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  let i = 1;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
