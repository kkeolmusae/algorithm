const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const firstParam = input[0];
const secondParam = input[1];

const count = firstParam.split(" ")[0];
const maxNum = firstParam.split(" ")[1];

const arr = secondParam.split(" ");

const numArr = [];
for (let i = 0; i < count - 2; i++) {
  for (let j = i + 1; j < count - 1; j++) {
    for (let k = j + 1; k < count; k++) {
      const sum = Number(arr[i]) + Number(arr[j]) + Number(arr[k]);
      if (sum <= maxNum) {
        numArr.push(sum);
      }
    }
  }
}
console.log(Math.max.apply(null, numArr));
