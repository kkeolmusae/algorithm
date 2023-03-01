/**
 * 입력
 * 첫 번째 줄에 수빈이가 있는 위치 N과 동생이 있는 위치 K가 주어진다.
 * N과 K는 정수이다.
 * 출력
 * 수빈이가 동생을 찾는 가장 빠른 시간을 출력한다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const [N, K] = input.split(" ").map(Number);

  if (N === K) return 0;

  const count = bfs(N, K);

  return count;
}

function bfs(N, K) {
  let subin = N;
  let visited = {};
  let needVisit = [
    [subin - 1, 1],
    [subin + 1, 1],
    [subin * 2, 1],
  ];

  while (true) {
    const [next, count] = needVisit.shift();

    if (next === K) return count;

    if (visited[next] || next < 0) continue;
    visited[next] = true;

    for (const newSubin of [next - 1, next + 1, next * 2]) {
      if (!visited[newSubin] && newSubin >= 0 && newSubin <= 100000) {
        needVisit.push([newSubin, count + 1]);
      }
    }
  }
}

console.log(solution(input));
