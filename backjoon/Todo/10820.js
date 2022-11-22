/**
 * 문자열 N개가 주어진다.
 * 이때, 문자열에 포함되어 있는 소문자, 대문자, 숫자, 공백의 개수를 구하는 프로그램을 작성하시오.
 * 각 문자열은 알파벳 소문자, 대문자, 숫자, 공백으로만 이루어져 있다.
 */
const input = require("fs").readFileSync("../input.txt").toString().split("\n");

function solution(input) {
  let answer = "";
  const regLowerCase = /^[a-z]+$/; // 영문 소문자만
  const regUpperCase = /^[A-Z]+$/; // 영문 대문자만

  for (const str of input) {
    if (!str) continue;

    let [lowerCase, uppperCase, num, space] = [0, 0, 0, 0];
    for (const elem of str) {
      if (regLowerCase.test(elem)) {
        lowerCase++;
      } else if (regUpperCase.test(elem)) {
        uppperCase++;
      } else if (elem === " ") {
        space++;
      } else if (!isNaN(elem)) {
        num++;
      }
    }
    answer += `${lowerCase} ${uppperCase} ${num} ${space}\n`;
    [lowerCase, uppperCase, num, space] = [0, 0, 0, 0];
  }

  return answer.slice(0, -1);
}
console.log(solution(input));
