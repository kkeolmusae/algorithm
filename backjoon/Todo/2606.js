/**
 * 입력
 * 첫째 줄에는 컴퓨터의 수가 주어진다. 컴퓨터의 수는 100 이하이고 각 컴퓨터에는 1번 부터 차례대로 번호가 매겨진다.
 * 둘째 줄에는 네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수가 주어진다.
 * 이어서 그 수만큼 한 줄에 한 쌍씩 네트워크 상에서 직접 연결되어 있는 컴퓨터의 번호 쌍이 주어진다.
 * 출력
 * 1번 컴퓨터가 웜 바이러스에 걸렸을 때, 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 첫째 줄에 출력한다.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

function createGraph(input, N) {
  const graph = [];

  for (let i = 1; i <= N; i++) {
    graph[i] = [];
  }
  for (const elem of input) {
    const [nodeA, nodeB] = elem.split(" ").map(Number);
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }
  for (let i = 1; i <= N; i++) {
    graph[i] = graph[i].sort((a, b) => {
      return a - b;
    });
  }
  return graph;
}

function solution(input) {
  const [computerCount, computerPairCount, ...pairs] = input;

  const graph = createGraph(pairs, computerCount);

  dfs(graph, 1);

  return Object.keys(visited).length - 1;
}

const visited = {};
function dfs(graph, node) {
  if (visited[node]) return;

  // console.log(`check node ${node}`);
  visited[node] = true;

  for (let i = 0; i < graph[node].length; i++) {
    const nextNode = graph[node][i];
    if (!visited[nextNode]) {
      dfs(graph, nextNode);
    }
  }
}

console.log(solution(input));
