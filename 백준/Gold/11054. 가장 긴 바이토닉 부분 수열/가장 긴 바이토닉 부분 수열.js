/**
 * 수열 S가 어떤 수 Sk를 기준으로 S1 < S2 < ... Sk-1 < Sk > Sk+1 > ... SN-1 > SN을 만족한다면,
 * 그 수열을 바이토닉 수열이라고 한다.
 * 예를 들어, {10, 20, 30, 25, 20}과 {10, 20, 30, 40}, {50, 40, 25, 10} 은 바이토닉 수열이지만,
 * {1, 2, 3, 2, 1, 2, 3, 2, 1}과 {10, 20, 30, 40, 20, 30} 은 바이토닉 수열이 아니다.
 * 수열 A가 주어졌을 때, 그 수열의 부분 수열 중 바이토닉 수열이면서 가장 긴 수열의 길이를 구하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const cnt = Number(input[0]);
  const nums = input[1].split(" ").map(Number);

  const descDp = {};
  const ascDp = {};
  const dp = [];

  for (let i = 0; i < nums.length; i++) {
    ascDp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        ascDp[i] = Math.max(ascDp[j] + 1, ascDp[i]);
      }
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    descDp[i] = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        descDp[i] = Math.max(descDp[j] + 1, descDp[i]);
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    dp[i] = ascDp[i] + descDp[i];
  }

  return Math.max(...dp);
}
console.log(solution(input));
