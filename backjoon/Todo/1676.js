/**
 * N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("../input.txt").toString();

function solution(input) {
  return parseInt(input / 5) + parseInt(input / 25) + parseInt(input / 125);
}

console.log(solution(input));
