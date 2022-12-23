/**
 * 입력
 * 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
 * 각 테스트 케이스는 한 줄로 이루어져 있고, N이 주어진다. N은 40보다 작거나 같은 자연수 또는 0이다.
 * 출력
 * 각 테스트 케이스마다 0이 출력되는 횟수와 1이 출력되는 횟수를 공백으로 구분해서 출력한다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function fib(n, memo) {
  if (memo[n]) return memo[n];
  if (n < 2) return n;

  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

function solution(input) {
  const [count, ...nums] = input;
  const maxNumber = Math.max(...nums);
  const dp = {};
  const answer = [];
  dp[0] = 0;
  dp[1] = 1;

  fib(maxNumber, dp);

  for (const num of nums) {
    if (num === "0") answer.push("1 0");
    else if (num === "1") answer.push("0 1");
    else answer.push(`${dp[num - 1]} ${dp[num]}`);
  }

  return answer.join("\n");
}
console.log(solution(input));
