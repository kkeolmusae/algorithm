/**
 * 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 3가지가 있다.
 * 합을 나타낼 때는 수를 1개 이상 사용해야 한다.
 * 단, 같은 수를 두 번 이상 연속해서 사용하면 안 된다.
 * 1+2+1
 * 1+3
 * 3+1
 * 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// dp[i][j] => i: N 숫자를 만들때 , j: 1또는2또는3 으로 끝난 경우에 대한 count
function solution(input) {
  const maxTestCast = Math.max(...input);
  const CONSTANTS = 1000000009;

  const answer = [];
  const dp = {};
  dp[0] = [0, 1, 0, 0];
  dp[1] = [0, 1, 0, 0];
  dp[2] = [0, 0, 1, 0];

  for (let i = 3; i <= maxTestCast; i++) {
    dp[i] = [0, 0, 0, 0];
    for (let j = 1; j <= 3; j++) {
      if (j === 1) {
        dp[i][j] = (dp[i - 1][2] + dp[i - 1][3]) % CONSTANTS;
      } else if (j === 2) {
        dp[i][j] = (dp[i - 2][1] + dp[i - 2][3]) % CONSTANTS;
      } else if (j === 3) {
        dp[i][j] = (dp[i - 3][1] + dp[i - 3][2]) % CONSTANTS;
      }
    }
  }

  for (let idx = 1; idx <= input[0]; idx++) {
    const arr = dp[input[idx]];
    answer.push((arr[1] + arr[2] + arr[3]) % CONSTANTS);
  }

  return answer.join("\n");
}
console.log(solution(input));
