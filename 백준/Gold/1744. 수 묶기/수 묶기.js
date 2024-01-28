const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [N, ...arr] = input;
  let isZeroExist = false;
  const sortedArr = arr.map(Number).sort((a, b) => {
    return b - a;
  });

  let answer = 0;
  let prevPositiveNum = 0;

  let lastIdx = 0;

  // 0이 나오기 전까지 양수에 대한 처리
  for (let idx = 0; idx < sortedArr.length; idx++) {
    const currentNum = sortedArr[idx];
    if (currentNum <= 0) {
      isZeroExist = currentNum === 0 ? true : false;
      lastIdx = idx;
      break;
    }
    if (currentNum > 0) {
      if (prevPositiveNum === 0) {
        prevPositiveNum = currentNum;
      } else {
        if (prevPositiveNum === 1 || currentNum === 1) {
          answer += prevPositiveNum + currentNum;
        } else {
          answer += prevPositiveNum * currentNum;
        }
        prevPositiveNum = 0;
      }
    }
  }

  if (prevPositiveNum > 0) answer += prevPositiveNum;

  // 0이 나오기 전까지 음수에 대한 처리
  let prevNegativeNum = 0;
  let lastIdxNegative = 0;
  for (let idx = sortedArr.length - 1; idx >= lastIdx; idx--) {
    const currentNum = sortedArr[idx];
    if (currentNum >= 0) {
      isZeroExist = currentNum === 0 ? true : false;
      lastIdxNegative = idx;
      break;
    }

    if (prevNegativeNum === 0) {
      prevNegativeNum = currentNum;
    } else {
      answer += prevNegativeNum * currentNum;
      prevNegativeNum = 0;
    }
  }

  // 남은 음수가 있으면
  if (prevNegativeNum < 0) {
    if (!isZeroExist) {
      answer += prevNegativeNum;
    }
  }

  return answer;
}

console.log(solution(input));
