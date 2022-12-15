/**
 * 이 동물원에는 사자들이 살고 있는데 사자들을 우리에 가둘 때,
 * 가로로도 세로로도 붙어 있게 배치할 수는 없다.
 * 이 동물원 조련사는 사자들의 배치 문제 때문에 골머리를 앓고 있다.
 * 동물원 조련사의 머리가 아프지 않도록 우리가 2*N 배열에 사자를 배치하는 경우의 수가
 * 몇 가지인지를 알아내는 프로그램을 작성해 주도록 하자.
 * 사자를 한 마리도 배치하지 않는 경우도 하나의 경우의 수로 친다고 가정한다.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim();

function solution(input) {
  const dp = {};
  dp[0] = 1;
  dp[1] = 3;
  dp[2] = 7;

  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
  }
  return dp[input];
}
console.log(solution(input));
