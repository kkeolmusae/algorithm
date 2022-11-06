function merge(arr1, arr2) {
  const mergedArr = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      mergedArr.push(arr2[j]);
      j++;
    } else {
      mergedArr.push(arr1[i]);
      mergedArr.push(arr2[j]);
      i++;
      j++;
    }
  }
  if (i >= arr1.length && j < arr2.length) return mergedArr.concat(arr2.slice(j));
  else if (j >= arr2.length && i < arr1.length) return mergedArr.concat(arr1.slice(i));

  return mergedArr;
}

function udemyMerge(arr1, arr2) {
  const mergedArr = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midIdx = arr.length / 2;
  const leftArr = mergeSort(arr.slice(0, midIdx));
  const rightArr = mergeSort(arr.slice(midIdx));

  const result = merge(leftArr, rightArr);
  return result;
}

console.log(mergeSort([3, 42, 24, 23, 12, 15, 64, 56, 34, 342, 1]));
