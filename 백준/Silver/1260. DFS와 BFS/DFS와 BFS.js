/**
 * 첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다.
 * V부터 방문된 점을 순서대로 출력하면 된다.
 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function sortAsc(arr) {
  return arr.sort((a, b) => {
    return a - b;
  });
}
function sortDesc(arr) {
  return arr.sort((a, b) => {
    return b - a;
  });
}
function createGraph(input) {
  const graph = {};
  for (const elem of input) {
    const [nodeA, nodeB] = elem.split(" ").map(Number);
    graph[nodeA] = graph[nodeA] ? [...graph[nodeA], nodeB] : [nodeB];
    graph[nodeB] = graph[nodeB] ? [...graph[nodeB], nodeA] : [nodeA];
  }
  return graph;
}
function solution(input) {
  const [N, M, V] = input.shift().split(" ").map(Number); // N: 정점의 개수, M: 간선의 개수, V: 탐색을 시작할 정점의 번호 V
  const graph = createGraph(input);

  const bfsResult = bfs(graph, V);
  const dfsResult = dfs(graph, V);
  return [dfsResult.join(" "), bfsResult.join(" ")].join("\n");
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
      if (graph[node]) needVisit = [...needVisit, ...sortAsc([...graph[node]])]; // 탐색할 노드 = 기존 탐색할 노드 + 탐색한 노드의 인접노드들(정렬)
    }
  }
  return visited;
}

function dfs(graph, startNode) {
  const visited = []; // 탐색한 노드
  let needVisit = []; // 탐색할 노드

  needVisit.push(startNode);

  while (needVisit.length) {
    const node = needVisit.pop(); // 탐색할 노드에서 가장뒤에꺼 탐색 (pop로 목록에서 제거)
    if (!visited.includes(node)) {
      visited.push(node); // 탐색 처리
      if (graph[node]) needVisit = [...needVisit, ...sortDesc([...graph[node]])]; // 탐색할 노드 = 기존 탐색할 노드 + 탐색한 노드의 인접노드(정렬한뒤 역순)
    }
  }
  return visited;
}

console.log(solution(input));
