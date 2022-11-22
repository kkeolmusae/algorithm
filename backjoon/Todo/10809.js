/**
 * 알파벳 소문자로만 이루어진 단어 S가 주어진다.
 * 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를,
 * 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.
 */
const input = require("fs").readFileSync("../input.txt").toString().split("\n");

function solution(input) {
  let answer = "";
  const str = input[0];
  const asciiSmallA = 97;
  const asciiSmallZ = 122;

  const dic = {};

  for (const idx in str) {
    if (!dic[str[idx]]) {
      dic[str[idx]] = idx;
    }
  }

  for (let ascii = asciiSmallA; ascii <= asciiSmallZ; ascii++) {
    //convert the char code to string (Alphabets)
    const alphabet = String.fromCharCode(ascii);
    //print the result in console
    if (dic[alphabet]) answer += `${dic[alphabet]} `;
    else answer += "-1 ";
  }
  return answer.slice(0, -1);
}
console.log(solution(input));
