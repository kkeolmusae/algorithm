/**
 * 문제
 * 체스판 위에 한 나이트가 놓여져 있다. 나이트가 한 번에 이동할 수 있는 칸은 아래 그림에 나와있다.
 * 나이트가 이동하려고 하는 칸이 주어진다. 나이트는 몇 번 움직이면 이 칸으로 이동할 수 있을까?
 *
 * 입력
 * 입력의 첫째 줄에는 테스트 케이스의 개수가 주어진다.
 * 각 테스트 케이스는 세 줄로 이루어져 있다. 첫째 줄에는 체스판의 한 변의 길이 l(4 ≤ l ≤ 300)이 주어진다.
 * 체스판의 크기는 l × l이다. 체스판의 각 칸은 두 수의 쌍 {0, ..., l-1} × {0, ..., l-1}로 나타낼 수 있다.
 * 둘째 줄과 셋째 줄에는 나이트가 현재 있는 칸, 나이트가 이동하려고 하는 칸이 주어진다.
 *
 * 출력
 * 각 테스트 케이스마다 나이트가 최소 몇 번만에 이동할 수 있는지 출력한다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const d = {
  0: [-2, 1],
  1: [-1, 2],
  2: [1, 2],
  3: [2, 1],
  4: [1, -2],
  5: [2, -1],
  6: [-2, -1],
  7: [-1, -2],
};

function createGraph(l) {
  const graph = [];

  for (let i = 0; i < l; i++) {
    graph[i] = [...new Array(l).fill(0)];
  }
  return graph;
}

function solution(input) {
  const [testCaseNum, ...testCase] = input;
  const answer = [];

  for (let i = 0; i < testCase.length; ) {
    const l = testCase[i]; // 체스판의 한 변의 길이
    const current = testCase[i + 1];
    const next = testCase[i + 2];

    const graph = createGraph(Number(l));
    const count = bfs(graph, current, next);
    answer.push(count);
    i += 3;
  }
  return answer.join("\n");
}

function bfs(graph, current, next) {
  let [cx, cy] = current.split(" ").map(Number);
  const [nx, ny] = next.split(" ").map(Number);

  const needVisit = [];
  needVisit.push([cx, cy, 0]);

  while (needVisit.length) {
    const next = needVisit.shift();
    if (next[0] === nx && next[1] === ny) return next[2];
    if (graph[next[0]][next[1]]) continue;
    graph[next[0]][next[1]] = 1;

    for (let i = 0; i < 8; i++) {
      if (d[i][0] + next[0] < 0 || d[i][1] + next[1] < 0 || d[i][0] + next[0] >= graph.length || d[i][1] + next[1] >= graph.length) continue;
      if (graph[d[i][0] + next[0]][d[i][1] + next[1]]) continue;
      needVisit.push([d[i][0] + next[0], d[i][1] + next[1], next[2] + 1]);
    }
  }
  return count;
}

console.log(solution(input));
