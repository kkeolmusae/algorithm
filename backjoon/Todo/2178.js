const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

const maze = [];
const count = [];
const d = {
  0: [-1, 0], // 위
  1: [0, 1], // 오른쪽
  2: [1, 0], // 아래
  3: [0, -1], // 왼쪽
};

function createMaze(input, N, M) {
  for (let i = 0; i <= N + 1; i++) {
    count[i] = new Array(M + 2).fill(0);
  }
  maze[0] = new Array(M + 2).fill(0);
  for (let i = 1; i <= N; i++) {
    maze[i] = [0, ...input[i - 1].split("").map(Number), 0];
  }
  maze[N + 1] = new Array(M + 2).fill(0);
}

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number); // N: 가로, M: 세로

  createMaze(input.slice(1), N, M);

  findExit(N, M);

  return count[N][M];
}

function findExit(N, M) {
  let cnt = 1;
  const queue = [];
  queue.push([1, 1]);
  count[1][1] = cnt;

  while (true) {
    const xy = queue.shift();
    if (xy[0] === N && xy[1] === M) break; // 출구에 도착한 경우
    if (!maze[xy[0]][xy[1]]) continue; // 방문한적 있으면 패스

    maze[xy[0]][xy[1]] = 0; // 방문 처리
    for (let i = 0; i < 4; i++) {
      if (maze[xy[0] + d[i][0]][xy[1] + d[i][1]]) {
        queue.push([xy[0] + d[i][0], xy[1] + d[i][1]]);
        count[xy[0] + d[i][0]][xy[1] + d[i][1]] = count[xy[0]][xy[1]] + 1;
      }
    }
  }
}

console.log(solution(input));
