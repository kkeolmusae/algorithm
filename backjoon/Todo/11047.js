const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

function solution(input) {
  let [N, K] = input[0].split(" ").map(Number);
  const coins = input
    .slice(1, input.length)
    .map(Number)
    .sort((a, b) => {
      return b - a;
    });

  let count = 0;

  for (const coin of coins) {
    if (coin > K) continue;

    if (K % coin === 0) {
      count += K / coin;
      break;
    }

    count += Math.floor(K / coin);
    K -= coin * Math.floor(K / coin);
  }

  return count;
}

console.log(solution(input));
