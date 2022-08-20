console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

function flatten(arr) {
  const flattenArr = [];

  function pushElem(arr) {
    for (const data of arr) {
      if (typeof data === "object") {
        pushElem(data);
      } else {
        flattenArr.push(data);
      }
    }
  }

  pushElem(arr);
  return flattenArr;
}
