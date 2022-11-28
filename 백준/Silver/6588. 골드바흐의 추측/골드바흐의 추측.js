/**
 *
 * 4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다.
 * 예를 들어 8은 3 + 5로 나타낼 수 있고, 3과 5는 모두 홀수인 소수이다.
 * 또, 20 = 3 + 17 = 7 + 13, 42 = 5 + 37 = 11 + 31 = 13 + 29 = 19 + 23 이다.
 * 이 추측은 아직도 해결되지 않은 문제이다.
 * 백만 이하의 모든 짝수에 대해서, 이 추측을 검증하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function eratos(num) {
  const dic = {};
  let answer = "";
  for (let i = 0; i <= num; i++) {
    // 일단 모두가 소수
    dic[i] = true;
  }

  // num의 제곱근까지
  for (let i = 2; i * i <= num; i++) {
    if (dic[i]) {
      for (let j = i * i; j <= num; j += i) {
        dic[j] = false;
      }
    }
  }

  dic["0"] = false;
  dic["1"] = false;

  return dic;
}
function solution(input) {
  let answer = "";

  let maxNumber = -Infinity;
  for (const num of input) {
    if (maxNumber < Number(num)) maxNumber = num;
  }

  const dic = eratos(maxNumber);

  for (const num of input) {
    if (num === "0") return answer.slice(0, -1);

    let str = "Goldbach's conjecture is wrong.";
    for (let i = Number(num); i >= 0; i--) {
      if (!dic[i]) continue;
      const diff = Number(num) - i;
      if (dic[diff]) {
        const result = `${num} = ${diff} + ${i}`;
        str = `${result}\n`;
        break;
      }
    }
    answer += str;
  }
}
console.log(solution(input));
