const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let answer = "";
  let idx = 1;

  // P일 중, L일동안만 사용할 수 있다. 강산이는 이제 막 V일짜리 휴가를 시작했다.
  for (const LPV of input) {
    const [L, P, V] = LPV.split(" ").map(Number);

    if (!L && !P && !V) return answer.trim();

    const a = Math.floor(V / P);
    const b = Math.min(V - P * a, L);

    answer += `Case ${idx++}: ${a * L + b}\n`;
  }
}

console.log(solution(input));
