const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const d = {
  0: [0, 1], // 오른쪽
  1: [1, 1], // 오른쪽아래
  2: [1, 0], // 아래
  3: [1, -1], // 왼쪽아래
  4: [0, -1], // 왼쪽
  5: [-1, -1], // 왼쪽위
  6: [-1, 0], // 위쪽
  7: [-1, 1], // 오른쪽위
};

function solution(input) {
  const answer = [];

  for (let idx = 0; idx < input.length; ) {
    const map = input.slice(idx + 1, Number(input[idx].split(" ")[1]) + idx + 1);
    const [w, h] = input[idx].split(" ").map(Number);
    if (w === 0 && h === 0) break;
    const graph = setGraph(map, w, h);

    let island = 0;
    for (let i = 1; i <= h; i++) { // 높이
      for (let j = 1; j <= w; j++) { // 너비
        if (graph[i][j] === 0) continue;
        bfs(i, j, graph);
        island++;
      }
    }
    answer.push(island);
    idx += h + 1;
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

    for (let idx = 0; idx <= 7; idx++) {
      if (graph[next[0] + d[idx][0]][next[1] + d[idx][1]] === 1) {
        needVisit.push([next[0] + d[idx][0], next[1] + d[idx][1]]);
      }
    }
  }
}

function setGraph(map, w, h) {
  // w: 너비, h: 높이
  const graph = [];
  graph.push(new Array(w + 2).fill(0));
  for (let i = 0; i < h; i++) {
    graph[i + 1] = [0, ...map[i].split(" ").map(Number), 0];
  }
  graph.push(new Array(w + 2).fill(0));
  return graph;
}

console.log(solution(input));