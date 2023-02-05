/**
 * 전쟁은 어느덧 전면전이 시작되었다. 결국 전투는 난전이 되었고, 우리 병사와 적국 병사가 섞여 싸우게 되었다.
 * 그러나 당신의 병사들은 흰색 옷을 입고, 적국의 병사들은 파란색 옷을 입었기 때문에 서로가 적인지 아군인지는 구분할 수 있다.
 * 문제는 같은 팀의 병사들은 모이면 모일수록 강해진다는 사실이다.
 * N명이 뭉쳐있을 때는 N2의 위력을 낼 수 있다. 과연 지금 난전의 상황에서는 누가 승리할 것인가?
 * 단, 같은 팀의 병사들이 대각선으로만 인접한 경우는 뭉쳐 있다고 보지 않는다.
 *
 * 입력
 * 첫째 줄에는 전쟁터의 가로 크기 N, 세로 크기 M(1 ≤ N, M ≤ 100)이 주어진다.
 * 그 다음 두 번째 줄에서 M+1번째 줄에는 각각 (X, Y)에 있는 병사들의 옷색이 띄어쓰기 없이 주어진다.
 * 모든 자리에는 병사가 한 명 있다. B는 파란색, W는 흰색이다.
 * 당신의 병사와 적국의 병사는 한 명 이상 존재한다.
 *
 * 출력
 * 첫 번째 줄에 당신의 병사의 위력의 합과 적국의 병사의 위력의 합을 출력한다.
 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const graph = [];
const d = {
  0: [-1, 0], // 위
  1: [0, 1], // 오른쪽
  2: [1, 0], // 아래
  3: [0, -1], // 왼쪽
};

function createGraph(input, N) {
  graph[0] = new Array(N + 2).fill(0);
  for (let i = 1; i <= N; i++) {
    graph[i] = [0, ...input[i - 1], 0];
  }
  graph[N + 1] = new Array(N + 2).fill(0);
}
function solution(input) {
  const [M, N] = input.shift().split(" ").map(Number); // N: 가로, M: 세로
  createGraph(input, N);

  let wTeamScore = 0;
  let bTeamScore = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (graph[i][j] === 0) continue;
      // console.log(`graph[${i}][${j}]`, graph[i][j]);

      if (graph[i][j] === "W") {
        wTeamScore += Math.pow(bfs(i, j, "W"), 2);
      } else {
        bTeamScore += Math.pow(bfs(i, j, "B"), 2);
      }
    }
  }
  return [wTeamScore, bTeamScore].join(" ");
}

function bfs(i, j, team) {
  let cnt = 0; // 탐색한 노드
  let needVisit = []; // 탐색할 노드

  needVisit.push([i, j]); // 시작노드를 탐색할 노드에 넣음

  while (needVisit.length) {
    const xy = needVisit.shift(); // 탐색할 노드에서 가장앞에꺼 탐색 (shift로 목록에서 제거)
    if (graph[xy[0]][xy[1]] === team) {
      cnt++;
      // 탐색한 노드가 탐색한적 없는 노드면
      graph[xy[0]][[xy[1]]] = 0; // 탐색 처리
      for (let idx = 0; idx < 4; idx++) {
        needVisit.push([xy[0] + d[idx][0], xy[1] + d[idx][1]]);
      }
    }
  }
  return cnt;
}

console.log(solution(input));
