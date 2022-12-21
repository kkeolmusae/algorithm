/**
 * 수열 A가 주어졌을 때, 그 수열의 증가 부분 수열 중에서 합이 가장 큰 것을 구하는 프로그램을 작성하시오.
 * 예를 들어, 수열 A = {1, 100, 2, 50, 60, 3, 5, 6, 7, 8} 인 경우에
 * 합이 가장 큰 증가 부분 수열은 A = {1, 100, 2, 50, 60, 3, 5, 6, 7, 8} 이고,
 * 합은 113이다.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

function solution(input) {
  const nums = [...input[1].split(" ")].map((strNum) => {
    return Number(strNum);
  });

  const dp = {};
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i];
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + nums[i]);
      }
    }
  }

  return Math.max(...Object.values(dp));
}
console.log(solution(input));
