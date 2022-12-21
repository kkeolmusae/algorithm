/**
 * 수열 A가 주어졌을 때, 가장 긴 감소하는 부분 수열을 구하는 프로그램을 작성하시오.
 * 예를 들어, 수열 A = {10, 30, 10, 20, 20, 10} 인 경우에
 * 가장 긴 감소하는 부분 수열은 A = {10, 30, 10, 20, 20, 10}  이고,
 * 길이는 3이다.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

function solution(input) {
  const nums = [...input[1].split(" ")];

  const dp = {};
  dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (Number(nums[j]) > Number(nums[i])) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  return Math.max(...Object.values(dp));
}
console.log(solution(input));
