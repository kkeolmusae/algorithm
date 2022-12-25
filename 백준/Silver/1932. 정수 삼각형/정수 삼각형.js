/**
 *         7
 *       3   8
 *     8   1   0
 *   2   7   4   4
 * 4   5   2   6   5
 * 위 그림은 크기가 5인 정수 삼각형의 한 모습이다.
 * 맨 위층 7부터 시작해서 아래에 있는 수 중 하나를 선택하여 아래층으로 내려올 때, 이제까지 선택된 수의 합이 최대가 되는 경로를 구하는 프로그램을 작성하라. 아래층에 있는 수는 현재 층에서 선택된 수의 대각선 왼쪽 또는 대각선 오른쪽에 있는 것 중에서만 선택할 수 있다.
 * 삼각형의 크기는 1 이상 500 이하이다. 삼각형을 이루고 있는 각 수는 모두 정수이며, 범위는 0 이상 9999 이하이
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let [size, ...tmp] = [...input];

  const triangle = [];
  const dp = [];

  for (let i = 0; i < tmp.length; i++) {
    triangle[i] = tmp[i].split(" ").map(Number);
    dp[i] = [triangle[i][0]];
  }

  for (let i = 1; i < triangle.length; i++) {
    dp[i][0] = triangle[i][0] + dp[i - 1][0];
    for (let j = 1; j < triangle[i].length; j++) {
      dp[i][j] = triangle[i][j] + Math.max(dp[i - 1][j] || 0, dp[i - 1][j - 1]);
    }
  }
  return Math.max(...dp[size - 1]);
}
console.log(solution(input));
