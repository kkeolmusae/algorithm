/**
 * 2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
 * 아래 그림은 2×5 크기의 직사각형을 채운 한 가지 방법의 예이다.
 * ㅇ|ㅇㅣ으으ㅣㅇ
 * ㅇ|ㅇㅣㅇㅇㅣㅇ
 *
 * 2 * 1 = 1
 * 2 * 2 = 2
 * 2 * 3 = 3
 * 2 * 4 = 5
 * 2 * 5 = 8
 * ...
 */

const input = require("fs").readFileSync("../input.txt").toString().trim();

function solution(input) {
  // 기본값 초기화
  let dp = {};
  const CONSTANTS = 10007;
  // dp[N] = dp[N-1] + dp[N-2]
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= input; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    dp[i] %= CONSTANTS; // 저장할때 미리 10007 나눔
  }
  return dp[input];
}

console.log(solution(input));
