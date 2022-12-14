/**
 * 수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.
 * 예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에
 * 가장 긴 증가하는 부분 수열은 A = {10, 20, 10, 30, 20, 50} 이고,
 * 길이는 4이다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const nums = [...input[1].split(" ")];

  const answer = [];
  const arr = [];

  const dp = {};
  dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (Number(nums[j]) < Number(nums[i])) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  const max = Math.max(...Object.values(dp));
  let tmp = max;
  for (let idx = nums.length - 1; idx >= 0; idx--) {
    if (Number(dp[idx]) === tmp) {
      arr.push(nums[idx]);
      tmp--;
    }
  }
  answer.push(max);
  answer.push(arr.reverse().join(" "));
  return answer.join("\n").trim();
}
console.log(solution(input));
