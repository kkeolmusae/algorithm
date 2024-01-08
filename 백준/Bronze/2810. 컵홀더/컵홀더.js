const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const chairCount = Number(input[0]);
  const chairs = input[1].split("");
  const COUPLE = "L";

  let count = 0;

  for (let idx = 0; idx < chairCount; idx++) {
    if (chairs[idx] === COUPLE) count++;
  }

  if (!count || count <= 2) return chairCount;

  return chairCount - (count / 2 - 1);
}

// function solution(input) {
//   const chairs = input[1].split("");
//   const SINGLE = "S";
//   const COUPLE = "L";

//   let count = 0;
//   const arr = [];

//   for (let idx = 0; idx < chairs.length; ) {
//     if (chairs[idx] === SINGLE) {
//       arr.push("*", SINGLE);
//       idx++;
//     } else {
//       arr.push("*", COUPLE, COUPLE);
//       idx += 2;
//     }
//   }
//   arr.push("*");

//   for (let idx = 0; idx < arr.length; ) {
//     if (!arr[idx]) break;

//     if (arr[idx] === "*" && arr[idx + 1] === SINGLE) {
//       count++;
//       idx += 2;
//     } else if (arr[idx] === "*" && arr[idx + 1] === COUPLE) {
//       count++;
//       idx += 2;
//     } else if (arr[idx] === COUPLE && arr[idx + 1] === "*") {
//       count++;
//       idx += 2;
//     } else if (arr[idx] === COUPLE && arr[idx + 1] === COUPLE) {
//       idx += 2;
//     } else if (arr[idx] === "*" && !arr[idx + 1]) {
//       if (arr[idx - 1] === SINGLE) break;
//       count++;
//       break;
//     } else if (arr[idx] === SINGLE && arr[idx + 1] === "*") {
//       count++;
//       idx += 2;
//     }
//   }

//   return count;
// }

console.log(solution(input));
