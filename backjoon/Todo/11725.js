/**
 * 문제
 * 루트 없는 트리가 주어진다. 이때, 트리의 루트를 1이라고 정했을 때, 각 노드의 부모를 구하는 프로그램을 작성하시오.
 * 입력
 * 첫째 줄에 노드의 개수 N (2 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N-1개의 줄에 트리 상에서 연결된 두 정점이 주어진다.
 * 출력
 * 첫째 줄부터 N-1개의 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력한다.
 */
const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

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
  const [N, ...nodes] = input; // N: 정점의 개수, nodes: 노드 연결 상태
  const graph = createGraph(nodes, N);

  const parentNode = bfs(graph, 1);

  return parentNode.slice(2).join("\n");
}

function bfs(graph, startNode) {
  const visited = []; // 탐색한 노드
  let needVisit = []; // 탐색할 노드

  needVisit.push(startNode); // 시작노드를 탐색할 노드에 넣음

  while (needVisit.length) {
    const node = needVisit.shift(); // 탐색할 노드에서 가장앞에꺼 탐색 (shift로 목록에서 제거)
    // 탐색한 노드가 탐색한적 없는 노드면
    for (const nextNode of graph[node]) {
      if (visited[nextNode]) continue;
      visited[nextNode] = node; // 부모노드 넣음
      needVisit.push(nextNode);
    }
  }
  return visited;
}

console.log(solution(input));
