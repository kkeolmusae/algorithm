/**
 * 0부터 N까지의 정수 K개를 더해서 그 합이 N이 되는 경우의 수를 구하는 프로그램을 작성하시오.
 * 덧셈의 순서가 바뀐 경우는 다른 경우로 센다(1+2와 2+1은 서로 다른 경우).
 * 또한 한 개의 수를 여러 번 쓸 수도 있다.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim().split(" ");

// dp[i][j] = i개수의 숫자로 j 를 만든다.
function solution(input) {
  const K = input[1]; // K(1 ≤ K ≤ 200) K 개의 숫자로 (4)
  const N = input[0]; // N(1 ≤ N ≤ 200) N 을 만든다. (6)
  const dp = {};
  const CONSTANTS = 1000000000;

  dp[0] = [];
  dp[1] = [];
  for (let i = 0; i <= K; i++) {
    dp[i] = [];
    for (let j = 0; j <= N; j++) {
      dp[i][j] = i;
    }
  }

  for (let i = 2; i <= K; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= N; j++) {
      dp[i][j] = (Number(dp[i - 1][j]) + Number(dp[i][j - 1])) % CONSTANTS;
    }
  }
  return dp[K][N];
}
console.log(solution(input));
