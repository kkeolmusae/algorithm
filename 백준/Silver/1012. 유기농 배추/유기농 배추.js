/**
 * 입력
 * 입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다. 그 다음 줄부터 각각의 테스트 케이스에 대해 첫째 줄에는 배추를 심은 배추밭의
 * 가로길이 M(1 ≤ M ≤ 50)과 세로길이 N(1 ≤ N ≤ 50), 그리고 배추가 심어져 있는 위치의 개수 K(1 ≤ K ≤ 2500)이 주어진다.
 * 그 다음 K줄에는 배추의 위치 X(0 ≤ X ≤ M-1), Y(0 ≤ Y ≤ N-1)가 주어진다. 두 배추의 위치가 같은 경우는 없다.
 *
 * 출력
 * 각 테스트 케이스에 대해 필요한 최소의 배추흰지렁이 마리 수를 출력한다.
 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const d = {
  0: [0, 1], // 오른쪽
  1: [1, 0], // 아래
  2: [0, -1], // 왼쪽
  3: [-1, 0], // 위쪽
};

function solution(input) {
  const answer = [];

  for (let idx = 1; idx < input.length; ) {
    const [M, N, K] = input[idx].split(" ").map(Number); // M: 가로, N: 세로, K: 관계수
    const XY = input.slice(idx + 1, Number(input[idx].split(" ")[2]) + idx + 1);

    const field = getField(M, N, XY);

    let warm = 0;
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= M; j++) {
        if (!field[i][j]) continue;
        bfs(i, j, field);
        warm++;
      }
    }
    answer.push(warm);

    idx += K + 1;
  }
  return answer.join("\n");
}

function bfs(i, j, graph) {
  const needVisit = [];

  needVisit.push([i, j]);

  while (needVisit.length) {
    const next = needVisit.shift();
    if (!graph[next[0]][next[1]]) continue;

    graph[next[0]][next[1]] = 0; // 방문처리

    for (let idx = 0; idx <= 3; idx++) {
      if (graph[next[0] + d[idx][0]][next[1] + d[idx][1]] === 1) {
        needVisit.push([next[0] + d[idx][0], next[1] + d[idx][1]]);
      }
    }
  }
}

function getField(M, N, XY) {
  // M: 가로, N: 세로
  const graph = [];

  for (let i = 0; i < N + 2; i++) {
    graph[i] = new Array(M + 2).fill(0);
  }
  for (let i = 0; i < XY.length; i++) {
    const [X, Y] = XY[i].split(" ").map(Number);
    graph[Y + 1][X + 1] = 1;
  }
  return graph;
}

console.log(solution(input));
