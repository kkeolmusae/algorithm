// // SAMPLE INPUT / OUTPUT
// const whatIsThis = (val) => val > 10;
// console.log(isOdd([1, 2, 3, 4]));
// console.log(isOdd([4, 6, 8, 9]));
// console.log(isOdd([4, 6, 8]));
// console.log(whatIsThis([4, 6, 8]));

const isOdd = (val) => val % 2 !== 0;
console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

function someRecursive(arr, cb) {
  if (arr.length <= 1) {
    return cb(arr.slice(-1));
  }

  if (cb(arr.slice(-1))) {
    return cb(arr.slice(-1));
  }

  return someRecursive(arr.slice(0, -1), cb);
}
