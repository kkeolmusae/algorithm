const input = require("fs").readFileSync("../input.txt").toString().trim();

function solution(input) {
  const binaryNumber = input.split("");
  if (binaryNumber.length === 1 && binaryNumber[0] === "0") return "0";
  let answer = "";
  let tmp = 0; // 자릿수
  let num = 0;

  for (let idx = binaryNumber.length - 1; idx >= 0; idx--) {
    if (binaryNumber[idx] === "0") {
      tmp++;
      if (tmp === 3) {
        answer = num.toString() + answer;
        num = 0;
        tmp = 0;
        continue;
      }
      continue;
    }

    if (tmp === 0) {
      num += 1;
      tmp++;
    } else if (tmp === 1) {
      num += 2;
      tmp++;
    } else {
      num += 4;
      answer = num.toString() + answer;
      tmp = 0;
      num = 0;
    }
  }
  if (num !== 0) answer = num.toString() + answer;
  return answer;
}

console.log(solution(input));
