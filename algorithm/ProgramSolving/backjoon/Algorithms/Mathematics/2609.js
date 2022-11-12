const [a, b] = require("fs")
  .readFileSync("backjoon/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => parseInt(i));

const i = a > b ? a : b; // 큰수
const j = a > b ? b : a; // 작은수

const gcd = getGCD(i, j);
const lcm = (i * j) / gcd;

console.log(gcd);
console.log(lcm);

function getGCD(i, j) {
  let temp = 0;
  while (j) {
    temp = i % j;
    i = j;
    j = temp;
  }
  return i;
}
