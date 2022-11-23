/**
 * M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

function solution(input) {
  let answer = "";
  const result = [];
  const startNumber = Number(input[0]);
  const endNumber = Number(input[1]);

  for (let i = 0; i <= endNumber; i++) {
    // 일단 모두가 소수
    result[i] = true;
  }

  for (let i = 2; i * i <= endNumber; i++) {
    if (result[i]) {
      for (let j = i * i; j <= endNumber; j += i) {
        result[j] = false;
      }
    }
  }
  result[0] = false;
  result[1] = false;

  for (let idx = startNumber; idx <= endNumber; idx++) {
    if (result[idx]) answer += `${idx}\n`;
  }

  return answer.slice(0, -1);
}

console.log(solution(input));
