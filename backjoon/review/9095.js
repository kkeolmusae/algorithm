const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

function solution(input) {
  const cnt = Number(input[0]);
  const nums = input[1].split(" ").map(Number);

  const dp = [0];
  for (let i = 1; i <= cnt; i++) {
    dp[i] = nums[i - 1];
  }

  for (let i = 1; i <= cnt; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + dp[j]);
    }
  }
  console.log(dp[cnt]);
}
console.log(solution(input));
