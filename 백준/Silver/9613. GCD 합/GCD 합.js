/**
 * 양의 정수 n개가 주어졌을 때, 가능한 모든 쌍의 GCD의 합을 구하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function euclidean(numA, numB) {
  const result = numA % numB;
  if (result === 0) return BigInt(numB);

  return euclidean(numB, result);
}
function solution(input) {
  const [totalCount, ...strs] = input;
  let totalAnswer = [];

  for (const str of strs) {
    const [count, ...nums] = str.split(" ");
    let answer = BigInt(0);

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const gcd = euclidean(nums[i], nums[j]);
        answer += gcd;
      }
    }
    totalAnswer.push(answer);
  }
  return totalAnswer.join("\n");
}

console.log(solution(input));
