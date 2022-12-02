/**
 * 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim();

function solution(input) {
  let num = input;
  let answer = [];
  let i = 2;
  while (num > 1) {
    let tmp = num % i;
    if (!tmp) {
      answer.push(i);
      num /= i;
    } else {
      i++;
    }
  }
  return answer.join("\n");
}
console.log(solution(input));
