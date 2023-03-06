/**
 * 입력
 * 첫째 줄에는 어떤 지역을 나타내는 2차원 배열의 행과 열의 개수를 나타내는 수 N이 입력된다.
 * N은 2 이상 100 이하의 정수이다.
 * 둘째 줄부터 N개의 각 줄에는 2차원 배열의 첫 번째 행부터 N번째 행까지
 * 순서대로 한 행씩 높이 정보가 입력된다.
 * 각 줄에는 각 행의 첫 번째 열부터 N번째 열까지 N개의 높이 정보를 나타내는
 * 자연수가 빈 칸을 사이에 두고 입력된다.
 * 높이는 1이상 100 이하의 정수이다.
 * 출력
 * 첫째 줄에 장마철에 물에 잠기지 않는 안전한 영역의 최대 개수를 출력한다.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

const d = {
  0: [0, 1], // 오른쪽
  1: [1, 0], // 아래
  2: [0, -1], // 왼쪽
  3: [-1, 0], // 위쪽
};

function getGraph(N, arr) {
  const graph = [];
  let max = 0;

  graph[0] = new Array(N + 2).fill(0);
  for (let i = 1; i <= N; i++) {
    const heights = arr[i - 1].split(" ").map(Number);
    max = Math.max(max, ...heights);
    graph[i] = [0, ...heights, 0];
  }
  graph[N + 1] = new Array(N + 2).fill(0);

  return [graph, max];
}

function solution(input) {
  const [N, ...arr] = input;

  const [graph, maxHeight] = getGraph(Number(N), arr);

  let max = 0;

  let tempGraph = JSON.parse(JSON.stringify(graph)); // 복사

  for (let h = 0; h <= maxHeight; h++) {
    let count = 0;
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        if (tempGraph[i][j] > h) {
          dfs(i, j, h, tempGraph);
          count++;
        }
      }
    }
    max = Math.max(count, max);
    tempGraph = JSON.parse(JSON.stringify(graph));
  }

  return max;
}

function dfs(i, j, height, graph) {
  const needVisit = [];

  needVisit.push([i, j]);

  while (needVisit.length) {
    const next = needVisit.pop();
    if (graph[next[0]][next[1]] <= height) continue;
    graph[next[0]][next[1]] = -1;

    for (let idx = 0; idx < 4; idx++) {
      if (graph[next[0] + d[idx][0]][next[1] + d[idx][1]] > height) {
        needVisit.push([next[0] + d[idx][0], next[1] + d[idx][1]]);
      }
    }
  }
}

console.log(solution(input));
