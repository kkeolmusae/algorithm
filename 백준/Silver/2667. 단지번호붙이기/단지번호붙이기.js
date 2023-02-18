/**
 * 입력
 * 첫 번째 줄에는 지도의 크기 N(정사각형이므로 가로와 세로의 크기는 같으며 5≤N≤25)이 입력되고,
 * 그 다음 N줄에는 각각 N개의 자료(0혹은 1)가 입력된다.
 * 출력
 * 첫 번째 줄에는 총 단지수를 출력하시오. 그리고 각 단지내 집의 수를 오름차순으로 정렬하여 한 줄에 하나씩 출력하시오.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const graph = [];
function setGraph(input, N) {
  graph[0] = new Array(N + 2).fill(0);
  for (let i = 1; i <= N; i++) {
    graph[i] = [0];
    graph[i].push(...input[i - 1].split("").map(Number));
    graph[i].push(0);
  }
  graph[N + 1] = new Array(N + 2).fill(0);
}

function solution(input) {
  const [N, ...data] = input;

  setGraph(data, Number(N));
  const answer = [];

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (graph[i][j] === 0) continue;
      answer.push(bfs(i, j, Number(N)));
    }
  }

  answer.sort((a, b) => {
    return a - b;
  });
  return [answer.length, ...answer].join("\n");
}

const d = {
  0: [0, 1],
  1: [1, 0],
  2: [0, -1],
  3: [-1, 0],
};

function bfs(i, j, N) {
  const needVisit = [];
  let house = 0;

  needVisit.push([i, j]);

  while (needVisit.length) {
    const next = needVisit.shift();
    if (graph[next[0]][next[1]] === 0) continue;

    graph[next[0]][next[1]] = 0; // 방문 처리
    house++;

    // 동남서북으로 순서로 탐색
    for (let idx = 0; idx < 4; idx++) {
      if (graph[next[0] + d[idx][0]][next[1] + d[idx][1]] === 1) {
        needVisit.push([next[0] + d[idx][0], next[1] + d[idx][1]]);
      }
    }
  }
  return house;
}
console.log(solution(input));
