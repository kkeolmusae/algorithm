function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) {
//         swap(arr, j, j - 1);
//       }
//     }
//   }
//   return arr;
// }

function udemyInsertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currValue;
  }
  return arr;
}
console.log(insertionSort([3, 44, 38, 5, 47]));
// console.log(udemyInsertionSort([3, 44, 38, 5, 47]));

//            i c
// [3, 44, 38, 5, 47]   38
//         j
