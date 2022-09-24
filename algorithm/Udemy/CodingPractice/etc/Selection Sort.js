function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function selectionSort(arr) {
  if (!arr.length) return;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    if (idx !== i) swap(arr, idx, i);
  }
  return arr;
}

console.log(selectionSort([36, 3, 26, 27, 2, 46, 4]));
