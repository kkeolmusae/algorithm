/**
 * 오르막 수는 수의 자리가 오름차순을 이루는 수를 말한다.
 * 이때, 인접한 수가 같아도 오름차순으로 친다.
 * 예를 들어, 2234와 3678, 11119는 오르막 수이지만, 2232, 3676, 91111은 오르막 수가 아니다.
 * 수의 길이 N이 주어졌을 때, 오르막 수의 개수를 구하는 프로그램을 작성하시오.
 * 수는 0으로 시작할 수 있다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const dp = {};
  const CONSTANTS = 10007;

  dp[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  for (let i = 1; i <= input; i++) {
    dp[i] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    for (let j = 1; j <= 9; j++) {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % CONSTANTS;
    }
  }
  return dp[input][9];
}
console.log(solution(input));
