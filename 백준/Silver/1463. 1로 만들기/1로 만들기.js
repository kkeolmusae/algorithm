/**
 * 정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.
 * X가 3으로 나누어 떨어지면, 3으로 나눈다.
 * X가 2로 나누어 떨어지면, 2로 나눈다.
 * 1을 뺀다.
 * 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다.
 * 연산을 사용하는 횟수의 최솟값을 출력하시오.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  // 기본값 초기화
  let dp = new Array(Number(input) + 1).fill(0);

  // 새로운 선택은 곧 연산횟수 증가라 각 선택지마다 뒤에 +1 이 붙어야함.
  for (let i = 2; i <= input; i++) {
    // 기본 선택지 -> 자기의 바로 앞 숫자 + 1
    dp[i] = dp[i - 1] + 1;

    // 2로 나눠지는 경우 선택지
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    // 3으로 나눠지는 경우 선택지
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }
  return dp[input];
}

console.log(solution(input));
