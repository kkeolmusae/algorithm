const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let answer = 0;

  const [N, K] = input[0].split(" ").map(Number);
  const MV = input.slice(1, N + 1); // M: 보석 무게, V: 보석 가격
  const C = input.slice(N + 1, N + K + 1).map(Number);

  const sortedC = C.sort((a, b) => a - b); // 가벼운거 담을 수 있는 가방부터
  const sortedMV = MV.sort((a, b) => {
    // 비싼 보석 순으로 정렬
    const numA = parseInt(a.split(" ")[1], 10);
    const numB = parseInt(b.split(" ")[1], 10);

    return numB - numA;
  });

  sortedC.map((bagWeight) => {
    for (let idx in sortedMV) {
      let currentMV = sortedMV[idx];
      if (!currentMV) continue;

      const [M, V] = currentMV.split(" ").map(Number);
      if (bagWeight >= M) {
        answer += V;
        sortedMV[idx] = null;
        break;
      }
    }
  });
  return answer;
}

console.log(solution(input));
