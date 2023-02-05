/**
 * 방향 없는 그래프가 주어졌을 때,
 * 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.
 * 메모리 초과 x
 */
const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");
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

// /**
//  * 방향 없는 그래프가 주어졌을 때,
//  * 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.
//  * 메모리 초과 o
//  */
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const visitedNode = {};

// function sortDesc(arr) {
//   return arr.sort((a, b) => {
//     return b - a;
//   });
// }
// function createGraph(input, N) {
//   const graph = [];
//   for (let i = 1; i <= N; i++) {
//     graph[i] = [];
//   }
//   for (const elem of input) {
//     const [nodeA, nodeB] = elem.split(" ").map(Number);
//     graph[nodeA].push(nodeB);
//     graph[nodeB].push(nodeA);
//   }
//   return graph;
// }
// function solution(input) {
//   const [N, M] = input.shift().split(" ").map(Number); // N: 정점의 개수, M: 간선의 개수, V: 탐색을 시작할 정점의 번호 V

//   let answer = 0;
//   let graph = createGraph(input, N);

//   for (let i = 1; i <= N; i++) {
//     if (visitedNode[i]) continue;
//     dfs(graph, i);
//     answer++;
//   }
//   return answer;
// }

// function dfs(graph, startNode) {
//   const visited = []; // 탐색한 노드
//   let needVisit = []; // 탐색할 노드

//   needVisit.push(startNode);

//   while (needVisit.length) {
//     const node = needVisit.pop(); // 탐색할 노드에서 가장뒤에꺼 탐색 (pop로 목록에서 제거)
//     if (visitedNode[node]) continue;

//     visitedNode[node] = true;
//     if (!visited.includes(node)) {
//       visited.push(node); // 탐색 처리
//       if (graph[node]) needVisit = [...needVisit, ...sortDesc([...graph[node]])]; // 탐색할 노드 = 기존 탐색할 노드 + 탐색한 노드의 인접노드(정렬한뒤 역순)
//     }
//   }
//   return visited;
// }
// console.log(solution(input));
