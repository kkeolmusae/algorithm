/**
 * 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("../input.txt").toString().split("\n");

function isPrimeNumber(num) {
  if (num <= 1) return false;

  const half = num / 2;

  for (let i = 2; i <= half; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(input) {
  let answer = 0;
  const nums = input[1].split(" ");
  for (const num of nums) {
    const result = isPrimeNumber(num);

    if (result) answer++;
  }

  return answer;
}

console.log(solution(input));
