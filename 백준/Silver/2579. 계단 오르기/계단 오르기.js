/**
 * 계단 오르기 게임은 계단 아래 시작점부터 계단 꼭대기에 위치한 도착점까지 가는 게임이다.
 * <그림 1>과 같이 각각의 계단에는 일정한 점수가 쓰여 있는데 계단을 밟으면 그 계단에 쓰여 있는 점수를 얻게 된다.
 *
 * 계단 오르는 데는 다음과 같은 규칙이 있다.
 * 계단은 한 번에 한 계단씩 또는 두 계단씩 오를 수 있다.
 * 즉, 한 계단을 밟으면서 이어서 다음 계단이나, 다음 다음 계단으로 오를 수 있다.
 * 연속된 세 개의 계단을 모두 밟아서는 안 된다. 단, 시작점은 계단에 포함되지 않는다.
 * 마지막 도착 계단은 반드시 밟아야 한다.
 * 따라서 첫 번째 계단을 밟고 이어 두 번째 계단이나, 세 번째 계단으로 오를 수 있다.
 * 하지만, 첫 번째 계단을 밟고 이어 네 번째 계단으로 올라가거나,
 * 첫 번째, 두 번째, 세 번째 계단을 연속해서 모두 밟을 수는 없다.
 *
 * 각 계단에 쓰여 있는 점수가 주어질 때
 * 이 게임에서 얻을 수 있는 총 점수의 최댓값을 구하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let [, ...stairs] = [...input];
  stairs = stairs.map(Number);
  const dp = {};

  dp[0] = stairs[0];
  dp[1] = stairs[0] + stairs[1];
  dp[2] = Math.max(stairs[0], stairs[1]) + stairs[2];

  /**
   * 공략법
   * 4번째 칸부터 선택지 : 2칸 올라오기 or 1칸 올라오기
   * 2칸 올라오는 경우 : 그냥 dp[n-2] + stairs[n] 하면 됨
   * 1칸 올라오는 경우 : 직전에 2칸 올라온 후에 1칸 올라오는 경우만 가능해서 dp[n-3] + stairs[n-1] + stairs[n]
   */
  for (let idx = 3; idx < stairs.length; idx++) {
    dp[idx] = Math.max(dp[idx - 2], stairs[idx - 1] + dp[idx - 3]) + stairs[idx];
  }
  return dp[stairs.length - 1];
}
console.log(solution(input));
