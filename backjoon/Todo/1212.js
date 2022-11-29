/**
 * 8진수가 주어졌을 때, 2진수로 변환하는 프로그램을 작성하시오.
 */
const input = require("fs").readFileSync("../input.txt").toString().trim();

function solution(input) {
  const octNumber = input.split("");
  let answer = "";
  let num = 0;

  for (let idx = 0; idx < octNumber.length; idx++) {
    if (octNumber[idx] === "0") {
      answer += "000";
    } else if (octNumber[idx] === "1") {
      answer += "001";
    } else if (octNumber[idx] === "2") {
      answer += "010";
    } else if (octNumber[idx] === "3") {
      answer += "011";
    } else if (octNumber[idx] === "4") {
      answer += "100";
    } else if (octNumber[idx] === "5") {
      answer += "101";
    } else if (octNumber[idx] === "6") {
      answer += "110";
    } else if (octNumber[idx] === "7") {
      answer += "111";
    }
  }
  while (answer[0] === "0") {
    answer = answer.slice(1);
  }
  return answer ? answer : "0";
}

console.log(solution(input));
