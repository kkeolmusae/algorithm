/**
 * 접미사 배열은 문자열 S의 모든 접미사를 사전순으로 정렬해 놓은 배열이다.
 * baekjoon의 접미사는 baekjoon, aekjoon, ekjoon, kjoon, joon, oon, on, n 으로 총 8가지가 있고,
 * 이를 사전순으로 정렬하면, aekjoon, baekjoon, ekjoon, joon, kjoon, n, on, oon이 된다.
 * 문자열 S가 주어졌을 때, 모든 접미사를 사전순으로 정렬한 다음 출력하는 프로그램을 작성하시오.
 */
const input = require("fs").readFileSync("../input.txt").toString().trim();

function solution(input) {
  const inputLength = input.length;
  const suffixArray = [];

  for (let i = 0; i < inputLength; i++) {
    suffixArray.push(input);
    input = input.slice(1);
  }

  suffixArray.sort();

  return suffixArray.join("\n");
}

console.log(solution(input));
