/**
 * 3×N 크기의 벽을 2×1, 1×2 크기의 타일로 채우는 경우의 수를 구해보자.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const N = Number(input);

  if (N % 2 !== 0) return 0;

  let dp = {};
  dp[0] = 1;
  dp[2] = 3;
  dp[4] = 11;

  for (let i = 6; i <= N; i += 2) {
    dp[i] = dp[i - 2] * dp[2];
    for (let j = i - 4; j >= 0; j -= 2) {
      dp[i] = dp[i] + dp[j] * 2;
    }
  }
  return dp[input];
}

console.log(solution(input));
