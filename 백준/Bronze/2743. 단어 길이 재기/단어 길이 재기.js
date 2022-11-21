const input = require("fs").readFileSync("/dev/stdin").toString();

function solution(input) {
  const regCase = /^[a-zA-Z]+$/; // 영문
  let count = 0;

  for (const elem of input) {
    if (regCase.test(elem)) count++;
  }
  return count;
}
console.log(solution(input));
