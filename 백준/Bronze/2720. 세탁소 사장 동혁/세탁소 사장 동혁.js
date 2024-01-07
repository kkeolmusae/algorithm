const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const count = Number(input[0]);
  let answer = "";

  const QUARTER = 25;
  const DIME = 10;
  const NICKEL = 5;
  const PENNY = 1;

  for (let idx = 0; idx < count; idx++) {
    const change = Number(input[idx + 1]);
    const quarterCount = Math.floor(change / QUARTER);
    const dimeCount = Math.floor((change - quarterCount * QUARTER) / DIME);
    const nickelCount = Math.floor((change - quarterCount * QUARTER - dimeCount * DIME) / NICKEL);
    const pennyCount = Math.floor((change - quarterCount * QUARTER - dimeCount * DIME - nickelCount * NICKEL) / PENNY);

    answer += `${quarterCount} ${dimeCount} ${nickelCount} ${pennyCount}\n`;
  }
  return answer.trim();
}

console.log(solution(input));
