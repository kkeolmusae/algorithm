/**
 * 입력
 * 첫 줄에는 상자의 크기를 나타내는 두 정수 M,N이 주어진다. M은 상자의 가로 칸의 수, N은 상자의 세로 칸의 수를 나타낸다.
 * 단, 2 ≤ M,N ≤ 1,000 이다. 둘째 줄부터는 하나의 상자에 저장된 토마토들의 정보가 주어진다.
 * 즉, 둘째 줄부터 N개의 줄에는 상자에 담긴 토마토의 정보가 주어진다.
 * 하나의 줄에는 상자 가로줄에 들어있는 토마토의 상태가 M개의 정수로 주어진다.
 * 정수 1은 익은 토마토, 정수 0은 익지 않은 토마토, 정수 -1은 토마토가 들어있지 않은 칸을 나타낸다.
 * 토마토가 하나 이상 있는 경우만 입력으로 주어진다.
 * 출력
 * 여러분은 토마토가 모두 익을 때까지의 최소 날짜를 출력해야 한다.
 * 만약, 저장될 때부터 모든 토마토가 익어있는 상태이면 0을 출력해야 하고,
 * 토마토가 모두 익지는 못하는 상황이면 -1을 출력해야 한다.
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
  const [M, N] = input[0].split(" ").map(Number); // M: 가로, N: 세로
  const graph = input.slice(1);

  const [box, checkBox] = getBox(M, N, graph);

  let warm = 0;
  let flag = true;
  const startIdx = [];
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (box[i][j] === 1) {
        startIdx.push([i, j]);
        flag = false;
      }
    }
  }
  // 토마토가 모두 익지 못하는 상황 (익은 토마토가 없는 경우)
  if (flag) return -1;

  const count = bfs(startIdx, box, checkBox);

  const result = checkFinish(M, N, box);

  if (result) return count;

  return -1;
}

function checkFinish(M, N, box) {
  // M: 가로, N: 세로
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (box[i][j] === 0) return false;
    }
  }
  return true;
}

function bfs(startIdx, box, checkBox) {
  let count = 0;
  let needVisit = [];
  let needVisitTemp = []; // 임시

  needVisit = startIdx;

  while (needVisit.length) {
    const next = needVisit.pop();

    if (checkBox[next[0]][next[1]] === 1) continue;

    box[next[0]][next[1]] = 1; // 방문처리
    checkBox[next[0]][next[1]] = 1; // 주변 방문처리

    // 오른쪽 -> 아래 -> 왼쪽 -> 위 순서로 순회
    for (let idx = 0; idx <= 3; idx++) {
      if (box[next[0] + d[idx][0]][next[1] + d[idx][1]] === 0) {
        box[next[0] + d[idx][0]][next[1] + d[idx][1]] = 1;
        needVisitTemp.push([next[0] + d[idx][0], next[1] + d[idx][1]]);
      }
    }
    if (!needVisit.length) {
      needVisit = needVisitTemp;
      needVisitTemp = [];
      count++;
    }
  }
  return count - 1;
}

function getBox(M, N, graph) {
  // M: 가로, N: 세로
  const box = [];
  const checkBox = [];

  box[0] = new Array(M + 2).fill(-1);
  checkBox[0] = new Array(M + 2).fill(-1);

  for (let i = 0; i < N; i++) {
    box[i + 1] = [-1, ...graph[i].split(" ").map(Number), -1];
    checkBox[i + 1] = [-1, ...new Array(M).fill(0), -1];
  }
  box[N + 1] = new Array(M + 2).fill(-1);
  checkBox[N + 1] = new Array(M + 2).fill(-1);
  return [box, checkBox];
}

console.log(solution(input));
