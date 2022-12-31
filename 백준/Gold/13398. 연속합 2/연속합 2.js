/**
 * n개의 정수로 이루어진 임의의 수열이 주어진다.
 * 우리는 이 중 연속된 몇 개의 수를 선택해서 구할 수 있는 합 중 가장 큰 합을 구하려고 한다.
 * 단, 수는 한 개 이상 선택해야 한다. 또, 수열에서 수를 하나 제거할 수 있다. (제거하지 않아도 된다)
 * 예를 들어서 10, -4, 3, 1, 5, 6, -35, 12, 21, -1 이라는 수열이 주어졌다고 하자.
 * 여기서 수를 제거하지 않았을 때의 정답은 12+21인 33이 정답이 된다.
 * 만약, -35를 제거한다면, 수열은 10, -4, 3, 1, 5, 6, 12, 21, -1이 되고,
 * 여기서 정답은 10-4+3+1+5+6+12+21인 54가 된다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const cnt = Number(input[0]);
  const nums = input[1].split(" ").map(Number);

  const dp = [nums[0]]; // 숫자 제거 안했을 때 수열의 최대값
  const dp2 = [nums[0]]; // 숫자 제거했을 때 수열의 최대값

  for (let idx = 1; idx < cnt; idx++) {
    dp[idx] = Math.max(nums[idx] + dp[idx - 1], nums[idx]);
    dp2[idx] = Math.max(dp2[idx - 1] + nums[idx], dp[idx - 1]);
  }

  return Math.max(Math.max(...dp2), Math.max(...dp));
}
console.log(solution(input));
