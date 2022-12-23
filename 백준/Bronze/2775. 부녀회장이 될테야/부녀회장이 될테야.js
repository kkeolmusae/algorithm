/**
 * 평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어
 * 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.
 * 이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지
 * 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 는 계약 조항을 꼭 지키고 들어와야 한다.
 * 아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때,
 * 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라.
 * 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let [count, ...nums] = [...input];
  let maxFloor = 0; // 최대 층
  let maxRoomNumber = 0; // 최대 호
  for (let idx = 1; idx < input.length; idx++) {
    if (idx % 2 === 0) maxRoomNumber = Math.max(maxRoomNumber, input[idx]);
    else maxFloor = Math.max(maxFloor, input[idx]);
  }
  // dp[i][j] = i층 j 번째
  const dp = {};
  dp[0] = [0];
  for (let i = 1; i <= maxRoomNumber; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= maxFloor; i++) {
    // 1층부터 시작
    dp[i] = [0];
    for (let j = 1; j <= maxRoomNumber; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  const answer = [];
  for (let i = 1; i < input.length; i += 2) {
    answer.push(dp[input[i]][input[i + 1]]);
  }

  return answer.join("\n");
}
console.log(solution(input));
