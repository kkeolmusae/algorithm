/**
 * 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다.
 * 합을 나타낼 때는 수를 1개 이상 사용해야 한다.
 * 1+1+1+1
 * 1+1+2
 * 1+2+1
 * 2+1+1
 * 2+2
 * 1+3
 * 3+1
 * 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

// dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
function solution(input) {
  const maxTestCast = Math.max(...input);
  const CONSTANTS = 1000000009;

  const answer = [];
  const dp = {};
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= maxTestCast; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % CONSTANTS;
  }
  for (let idx = 1; idx < input.length; idx++) {
    answer.push(dp[input[idx]]);
  }

  return answer.join("\n");
}
console.log(solution(input));
