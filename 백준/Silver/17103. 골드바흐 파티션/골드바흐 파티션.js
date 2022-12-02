/**
 * 골드바흐의 추측: 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
 * 짝수 N을 두 소수의 합으로 나타내는 표현을 골드바흐 파티션이라고 한다.
 * 짝수 N이 주어졌을 때, 골드바흐 파티션의 개수를 구해보자.
 * 두 소수의 순서만 다른 것은 같은 파티션이다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function eratos(num) {
  const dic = {};
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
  let answer = [];

  let maxNumber = -Infinity;
  for (const num of input) {
    if (maxNumber < Number(num)) maxNumber = num;
  }

  const dic = eratos(maxNumber);

  let count = 0;
  for (const num of input.slice(1)) {
    for (let i = 2; i <= num / 2; i++) {
      if (dic[i] === true && dic[num - i] === true) count++;
    }
    answer.push(count);
    count = 0;
  }

  return answer.join("\n");
}
console.log(solution(input));
