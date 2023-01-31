/**
 * 1부터 N까지의 수를 이어서 쓰면 다음과 같이 새로운 하나의 수를 얻을 수 있다.
 * 1234567891011121314151617181920212223...
 * 이렇게 만들어진 새로운 수는 몇 자리 수일까? 이 수의 자릿수를 구하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim();

function solution(input) {
  const num = Number(input);
  if (num < 10) return num;

  let answer = 0;
  let numsCount = 9;
  let tmp = "";
  for (let i = 1; i < input.length; i++) {
    answer += i * numsCount;
    numsCount *= 10;
    tmp += "9";
  }
  answer += input.length * (num - tmp);
  return answer;
}
console.log(solution(input));
