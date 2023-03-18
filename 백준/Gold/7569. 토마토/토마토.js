/**
 * 입력
 * 첫 줄에는 상자의 크기를 나타내는 두 정수 M,N과 쌓아올려지는 상자의 수를 나타내는 H가 주어진다.
 * M은 상자의 가로 칸의 수, N은 상자의 세로 칸의 수를 나타낸다.
 * 단, 2 ≤ M ≤ 100, 2 ≤ N ≤ 100, 1 ≤ H ≤ 100 이다.
 * 둘째 줄부터는 가장 밑의 상자부터 가장 위의 상자까지에 저장된 토마토들의 정보가 주어진다.
 * 즉, 둘째 줄부터 N개의 줄에는 하나의 상자에 담긴 토마토의 정보가 주어진다.
 * 각 줄에는 상자 가로줄에 들어있는 토마토들의 상태가 M개의 정수로 주어진다.
 * 정수 1은 익은 토마토, 정수 0 은 익지 않은 토마토, 정수 -1은 토마토가 들어있지 않은 칸을 나타낸다.
 * 이러한 N개의 줄이 H번 반복하여 주어진다.
 * 토마토가 하나 이상 있는 경우만 입력으로 주어진다.
 *
 * 출력
 * 여러분은 토마토가 모두 익을 때까지 최소 며칠이 걸리는지를 계산해서 출력해야 한다.
 * 만약, 저장될 때부터 모든 토마토가 익어있는 상태이면 0을 출력해야 하고,
 * 토마토가 모두 익지는 못하는 상황이면 -1을 출력해야 한다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const di = {
  0: [0, 0, 1], // 오른쪽
  1: [0, 1, 0], // 아래
  2: [0, 0, -1], // 왼쪽
  3: [0, -1, 0], // 위쪽
  4: [1, 0, 0], // 아래 상자
  5: [-1, 0, 0], // 위 상자
};

function solution(input) {
  const [M, N, H] = input[0].split(" ").map(Number); // M: 가로, N: 세로, H: 높이

  const [boxes, checkBoxes] = getBox(M, N, H, input.slice(1));

  const startIdx = checkInit(boxes, M, N, H);
  if (!startIdx.length) return -1;

  const count = bfs(startIdx, boxes, checkBoxes);

  const result = checkFinish(M, N, H, boxes);

  if (result) return count;

  return -1;
}

function checkInit(box, M, N, H) {
  let flag = true;
  const startIdx = [];

  for (let k = 0; k < H; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= M; j++) {
        if (box[k][i][j] === 1) {
          startIdx.push([k, i, j]);
          flag = false;
        }
      }
    }
  }
  // 토마토가 모두 익지 못하는 상황 (익은 토마토가 없는 경우)
  return startIdx;
}

function checkFinish(M, N, H, box) {
  // M: 가로, N: 세로
  for (let k = 0; k < H; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= M; j++) {
        if (box[k][i][j] === 0) return false;
      }
    }
  }
  return true;
}

function bfs(startIdx, boxes, checkBoxes) {
  let count = 0;
  let needVisit = [];
  let needVisitTemp = []; // 임시

  needVisit = startIdx;

  while (needVisit.length) {
    const next = needVisit.pop();

    if (checkBoxes[next[0]][next[1]][next[2]] === 1) continue;

    boxes[next[0]][next[1]][next[2]] = 1; // 방문처리
    checkBoxes[next[0]][next[1]][next[2]] = 1; // 주변 방문처리

    // 오른쪽 -> 아래 -> 왼쪽 -> 위 순서로 순회
    for (let idx = 0; idx <= 5; idx++) {
      const h = next[0] + di[idx][0]; // 높이
      const w = next[1] + di[idx][1]; // 가로
      const d = next[2] + di[idx][2]; // 세로 depth

      if (boxes[h] && boxes[h][w][d] === 0) {
        boxes[h][w][d] = 1;
        needVisitTemp.push([h, w, d]);
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

function getBox(M, N, H, graph) {
  // M: 가로, N: 세로, H: 높이
  const boxes = [];
  const checkBoxes = [];

  for (let j = 0; j < H; j++) {
    const box = [];
    const checkBox = [];
    box[0] = new Array(M + 2).fill(-1);
    checkBox[0] = new Array(M + 2).fill(-1);

    for (let i = 0; i < N; i++) {
      box[i + 1] = [-1, ...graph[i + j * N].split(" ").map(Number), -1];
      checkBox[i + 1] = [-1, ...new Array(M).fill(0), -1];
    }
    box[N + 1] = new Array(M + 2).fill(-1);
    checkBox[N + 1] = new Array(M + 2).fill(-1);

    boxes.push(box);
    checkBoxes.push(checkBox);
  }

  return [boxes, checkBoxes];
}

console.log(solution(input));
