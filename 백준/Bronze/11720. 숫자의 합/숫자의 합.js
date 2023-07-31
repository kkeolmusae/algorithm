const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const arr = input[1].split("");

  let sum = 0;
  arr.forEach((element) => {
    sum += Number(element);
  });

  return sum;
}
console.log(solution(input));
