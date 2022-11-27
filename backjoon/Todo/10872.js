/**
 * 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("../input.txt").toString();

function factorial(num) {
  if (num === 1) return num;
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
function solution(input) {
  const result = factorial(Number(input));
  return result;
}

console.log(solution(input));
