const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let N = Number(input[0]);
  const time = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => {
      return a - b;
    });
  let totalTime = 0;

  time.map((t) => {
    totalTime += t * N--;
  });
  return totalTime;
}

console.log(solution(input));
