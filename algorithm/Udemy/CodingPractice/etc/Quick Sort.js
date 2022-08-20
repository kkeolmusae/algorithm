// 배열의 첫번째값을 기준(pivot)으로 잡고 왼쪽은 pivot보다 작은거, 오른쪽은 pivot보다 큰걸로 정렬
function pivot(arr, sidx = 0, eidx = arr.length - 1) {
  let pivot = arr[sidx];
  let swapIdx = sidx;

  for (let i = sidx + 1; i <= eidx; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, swapIdx, sidx);
  return swapIdx;
}

function quickSort(arr, leftIdx = 0, rightIdx = arr.length - 1) {
  // leftIdx랑 rightIdx는 점점 가까워지다가 나중에 같아짐 -> 종료 조건
  if (leftIdx < rightIdx) {
    let pivotIdx = pivot(arr, leftIdx, rightIdx);
    quickSort(arr, leftIdx, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, rightIdx);
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
