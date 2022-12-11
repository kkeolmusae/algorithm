/**
 * 45656이란 수를 보자.
 * 이 수는 인접한 모든 자리의 차이가 1이다. 이런 수를 계단 수라고 한다
 * N이 주어질 때, 길이가 N인 계단 수가 총 몇 개 있는지 구해보자. 0으로 시작하는 수는 계단수가 아니다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  // 기본값 초기화
  let dp = {};
  const CONSTANTS = 1000000000;

  dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  for (let i = 2; i <= input; i++) {
    dp[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let j = 0; j <= 9; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][1];
      } else if (j === 9) {
        dp[i][j] = dp[i - 1][8];
      } else {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
      }
      dp[i][j] = dp[i][j] % CONSTANTS;
    }
  }

  let answer = BigInt(0);
  for (const num of dp[input]) {
    answer += BigInt(num);
  }
  answer %= BigInt(CONSTANTS);
  return answer.toString();
}

console.log(solution(input));
