/**
 * B진법 수 N이 주어진다. 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.
 * 10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다.
 * 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.
 * A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

function solution(input) {
  let N = input[0];
  const B = input[1]; // B 진법

  if (!N) return "0";

  let answer = 0;
  let tmp = 1;

  let dic = {};
  if (B > 9) {
    let ascii = 65; // A
    for (let i = 10; i < B; i++) {
      dic[String.fromCharCode(ascii++)] = i;
    }
  }

  for (let idx = N.length - 1; idx >= 0; idx--) {
    if (isNaN(N[idx])) {
      answer += dic[N[idx]] * tmp;
    } else {
      answer += N[idx] * tmp;
    }
    tmp *= B;
  }

  return answer;
}
console.log(solution(input));
