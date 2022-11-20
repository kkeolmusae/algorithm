/**
 * 알파벳 소문자로만 이루어진 단어 S가 주어진다.
 * 각 알파벳이 단어에 몇 개가 포함되어 있는지 구하는 프로그램을 작성하시오.
 */
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function solution(input) {
  let answer = "";
  const str = input[0];
  const asciiSmallA = 97;
  const asciiSmallZ = 122;

  const dic = {};

  for (const elem of str) {
    dic[elem] = dic[elem] ? dic[elem] + 1 : 1;
  }

  for (let ascii = asciiSmallA; ascii <= asciiSmallZ; ascii++) {
    //convert the char code to string (Alphabets)
    const alphabet = String.fromCharCode(ascii);
    //print the result in console
    if (dic[alphabet]) answer += `${dic[alphabet]} `;
    else answer += "0 ";
  }
  return answer.slice(0, -1);
}
console.log(solution(input));
