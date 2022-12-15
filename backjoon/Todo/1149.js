/**
 * RGB거리에는 집이 N개 있다.
 * 거리는 선분으로 나타낼 수 있고, 1번 집부터 N번 집이 순서대로 있다.
 * 집은 빨강, 초록, 파랑 중 하나의 색으로 칠해야 한다.
 * 각각의 집을 빨강, 초록, 파랑으로 칠하는 비용이 주어졌을 때,
 * 아래 규칙을 만족하면서 모든 집을 칠하는 비용의 최솟값을 구해보자.
 * 1번 집의 색은 2번 집의 색과 같지 않아야 한다.
 * N번 집의 색은 N-1번 집의 색과 같지 않아야 한다.
 * i(2 ≤ i ≤ N-1)번 집의 색은 i-1번, i+1번 집의 색과 같지 않아야 한다.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

function solution(input) {
  const count = input[0]; // 집 개수
  const dp = {};

  for (let i = 1; i <= count; i++) {
    dp[i] = input[i].split(" ");
  }
  //초기화
  //0  1  2
  //26 40 83
  //49 60 57 j = 2
  //13 89 99 j = 3

  for (let j = 2; j <= count; j++) {
    dp[j][0] = Math.min(Number(dp[j - 1][1]), Number(dp[j - 1][2])) + Number(dp[j][0]);
    dp[j][1] = Math.min(Number(dp[j - 1][2]), Number(dp[j - 1][0])) + Number(dp[j][1]);
    dp[j][2] = Math.min(Number(dp[j - 1][1]), Number(dp[j - 1][0])) + Number(dp[j][2]);
  }

  return Math.min(...dp[count]);
}
console.log(solution(input));
