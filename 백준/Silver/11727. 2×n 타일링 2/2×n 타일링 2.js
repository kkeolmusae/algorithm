/**
 * 2×n 직사각형을 1×2, 2×1과 2×2 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
 * 아래 그림은 2×17 직사각형을 채운 한가지 예이다.
 * 2 * 1 = 1
 * 2 * 2 = 3
 * 2 * 3 = 5
 * 2 * 4 = 11
 * 2 * 5 = 21
 * 2 * 6 = 43
 * 2 * 7 = 85
 * 2 * 8 = 171
 * ...
 * 2 * 12 = 2731
 * ...
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  // 기본값 초기화
  let dp = {};
  const CONSTANTS = 10007;
  // dp[N] = dp[N-1] + 2 * dp[N-2]
  dp[1] = 1;
  dp[2] = 3;
  for (let i = 3; i <= input; i++) {
    dp[i] = dp[i - 1] + 2 * dp[i - 2];
    dp[i] %= CONSTANTS; // 저장할때 미리 10007 나눔
  }
  return dp[input];
}

console.log(solution(input));
