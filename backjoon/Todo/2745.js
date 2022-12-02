/**
 * B진법 수 N이 주어진다. 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.
 * 10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다.
 * 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.
 * A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
 */

const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

function solution(input) {
  const aArithmetic = input[0].split(" ")[0]; // 진법
  const bArithmetic = input[0].split(" ")[1]; // 진법
  const nums = input[2].split(" "); // A 진법 (배열)

  let baseTenNumber = 0;
  let tmp = 1;
  for (let idx = nums.length - 1; idx >= 0; idx--) {
    baseTenNumber += tmp * nums[idx];
    tmp *= aArithmetic;
  }

  let answer = [];
  while (true) {
    answer.push(baseTenNumber % bArithmetic); // 나머지
    const quotient = Math.floor(baseTenNumber / bArithmetic); //  몫
    if (quotient < bArithmetic) {
      answer.push(quotient);
      break;
    }
    baseTenNumber = quotient;
  }

  return answer.reverse().join(" ");
}
console.log(solution(input));
//- 2 4 15
