const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const money = Number(input);
  const change = 1000 - money;

  const moneyType = {
    A: 500,
    B: 100,
    C: 50,
    D: 10,
    E: 5,
    F: 1,
  };

  const counts = {};
  let remainingMoney = change;
  let totalCount = 0;

  for (const key in moneyType) {
    counts[key] = Math.floor(remainingMoney / moneyType[key]);
    totalCount += counts[key];
    remainingMoney -= counts[key] * moneyType[key];
  }

  return totalCount;
}

console.log(solution(input));
