/**
 * nCm의 끝자리 0의 개수를 출력하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("../input.txt").toString().split(" ");

// number! 값의 n 승수 구하기 (https://st-lab.tistory.com/166)
function getPowerOfNumber(number, n) {
  let count = 0;
  while (number >= n) {
    count += parseInt(number / n);
    number = parseInt(number / n);
  }
  return count;
}

function solution(input) {
  const numA = input[0];
  const numB = input[1];

  const powerOfTwo = getPowerOfNumber(numA, 2) - getPowerOfNumber(numA - numB, 2) - getPowerOfNumber(numB, 2);
  const powerOfFive = getPowerOfNumber(numA, 5) - getPowerOfNumber(numA - numB, 5) - getPowerOfNumber(numB, 5);

  return Math.min(powerOfTwo, powerOfFive);
}

console.log(solution(input));
