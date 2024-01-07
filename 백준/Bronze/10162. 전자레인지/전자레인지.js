const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const time = Number(input);

  const durations = {
    A: 300, // 5m = 300s
    B: 60, // 1m = 60s
    C: 10,
  };

  const counts = {};
  let remainingTime = time;

  for (const key in durations) {
    counts[key] = Math.floor(remainingTime / durations[key]);
    remainingTime -= counts[key] * durations[key];
  }

  if (remainingTime === 0) {
    return `${counts.A} ${counts.B} ${counts.C}`;
  }

  return -1;
}

console.log(solution(input));
