const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

function solution(input) {
  const A = parseInt(input[0]);
  const B = parseInt(input[1]);
  return A - B;
}

console.log(solution(input));
