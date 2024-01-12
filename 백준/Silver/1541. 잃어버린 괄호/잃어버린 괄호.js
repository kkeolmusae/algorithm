const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  let number = "";
  let isMinus = false;
  let result = 0;

  input.split("").map((str) => {
    if (str === "+" || str === "-") {
      if (!isMinus) {
        result += Number(number);
      } else {
        result -= Number(number);
      }
      number = "";
    } else {
      number += str;
    }

    if (str === "-") {
      isMinus = true;
    }
  });

  if (isMinus) {
    result -= Number(number);
  } else {
    result += Number(number);
  }
  return result;
}

console.log(solution(input));
