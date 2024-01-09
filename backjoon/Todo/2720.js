const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

function solution(input) {
  const count = Number(input[0]);
  let answers = "";

  const moneyType = {
    QUARTER: 25,
    DIME: 10,
    NICKEL: 5,
    PENNY: 1,
  };

  for (let idx = 0; idx < count; idx++) {
    const moneyCount = {};
    let changes = Number(input[idx + 1]);
    let answer = "";

    for (const key in moneyType) {
      const changeCount = Math.floor(changes / moneyType[key]);
      moneyCount[key] = changeCount;
      changes -= moneyCount[key] * moneyType[key];
      answer += `${moneyCount[key]} `;
    }
    answers += `${answer.trim()}\n`;
  }

  return answers.trim();
}

console.log(solution(input));
