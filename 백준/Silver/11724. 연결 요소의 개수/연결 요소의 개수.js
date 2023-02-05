/**
 * 방향 없는 그래프가 주어졌을 때,
 * 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.
 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const visitedNode = {};

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
  return graph;
}
function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number); // N: 정점의 개수, M: 간선의 개수

  let answer = 0;
  let graph = createGraph(input, N);

  for (let i = 1; i <= N; i++) {
    if (visitedNode[i]) continue;
    dfs(graph, i);
    answer++;
  }
  return answer;
}

function dfs(graph, node) {
  visitedNode[node] = true;
  for (let i = 0; i < graph[node].length; i++) {
    let next = graph[node][i];
    if (!visitedNode[next]) {
      dfs(graph, next);
    }
  }
}

console.log(solution(input));
