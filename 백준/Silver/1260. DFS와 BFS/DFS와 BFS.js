/**
 * 첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다.
 * V부터 방문된 점을 순서대로 출력하면 된다.
 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const dfsVisited = [];
const dfsVisitedNode = [];

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
  const [N, M, V] = input.shift().split(" ").map(Number); // N: 정점의 개수, M: 간선의 개수, V: 탐색을 시작할 정점의 번호 V
  const graph = createGraph(input, N);

  dfs(graph, V);
  const bfsResult = bfs(graph, V);
  return [dfsVisitedNode.join(" "), bfsResult.join(" ")].join("\n");
}

function dfs(graph, startNode) {
  if (!dfsVisited[startNode]) {
    // 탐색한 적 없으면
    dfsVisited[startNode] = true; // 탐색처리
    dfsVisitedNode.push(startNode); // 탐색할 노드에 추가
  }

  for (const node of graph[startNode]) {
    if (!dfsVisited[node]) {
      dfs(graph, node);
    }
  }
}

function bfs(graph, startNode) {
  const visited = []; // 탐색한 노드
  let needVisit = []; // 탐색할 노드

  needVisit.push(startNode); // 시작노드를 탐색할 노드에 넣음

  while (needVisit.length) {
    const node = needVisit.shift(); // 탐색할 노드에서 가장앞에꺼 탐색 (shift로 목록에서 제거)
    if (!visited.includes(node)) {
      // 탐색한 노드가 탐색한적 없는 노드면
      visited.push(node); // 탐색 처리
      if (graph[node]) needVisit = [...needVisit, ...graph[node]]; // 탐색할 노드 = 기존 탐색할 노드 + 탐색한 노드의 인접노드들(정렬)
    }
  }
  return visited;
}

console.log(solution(input));
