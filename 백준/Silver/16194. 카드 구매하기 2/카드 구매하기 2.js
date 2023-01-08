/**
 * 입력
 * 첫째 줄에 민규가 구매하려고 하는 카드의 개수 N이 주어진다. (1 ≤ N ≤ 1,000)
 * 둘째 줄에는 Pi가 P1부터 PN까지 순서대로 주어진다. (1 ≤ Pi ≤ 10,000)
 *
 * 출력
 * 첫째 줄에 민규가 카드 N개를 갖기 위해 지불해야 하는 금액의 최솟값을 출력한다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = input[0];
  const card = input[1].split(" ").map(Number);
  const dp = [0];

  for (const num of card) {
    dp.push(num);
  }

  // i = 살 수 있는 카드 수
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i / 2; j++) {
      // i/2 까지 하는 이유 : 반복횟수를 최소화 하기 위해
      // 예를 들어, 3 장의 카드를 살 수 있을 때, 1장을 선택하고 2장을 선택하나, 2장을 선택하고 1장을 선택하나 같기 때문에

      // 카드 j 장을 샀을때 나머지 살 수 있는 카드 -> i - j
      dp[i] = Math.min(dp[i], dp[i - j] + dp[j]);
    }
  }

  return dp[N];
}
console.log(solution(input));
