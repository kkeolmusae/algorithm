function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function optimizedBubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function moreOptimizedBubbleSort(arr) {
  let isSwap;
  for (let i = arr.length - 1; i > 0; i--) {
    isSwap = false;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        isSwap = true;
        swap(arr, j, j + 1);
      }
    }
    if (!isSwap) return arr;
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// console.log(bubbleSort([37, 45, 29, 8]));
// console.log(optimizedBubbleSort([37, 45, 29, 8]));
console.log(moreOptimizedBubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 10]));
