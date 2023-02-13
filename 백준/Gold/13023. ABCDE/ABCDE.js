/**
 * 입력
 * 첫째 줄에 사람의 수 N (5 ≤ N ≤ 2000)과 친구 관계의 수 M (1 ≤ M ≤ 2000)이 주어진다.
 * 둘째 줄부터 M개의 줄에는 정수 a와 b가 주어지며, a와 b가 친구라는 뜻이다. (0 ≤ a, b ≤ N-1, a ≠ b) 같은 친구 관계가 두 번 이상 주어지는 경우는 없다.
 *
 * 출력
 * 문제의 조건에 맞는 A, B, C, D, E가 존재하면 1을 없으면 0을 출력한다.
 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let visitedNode = {};
let answer = false;

function createGraph(input, N) {
  const graph = [];
  for (let i = 0; i <= N - 1; i++) {
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
  const [N, M] = input.shift().split(" ").map(Number); // N: 사람의 수, M: 친구 관계의 수

  let graph = createGraph(input, N);

  for (let i = 0; i <= N - 1; i++) {
    let depth = 1;
    visitedNode = {};
    answer = false;
    dfs(graph, i, depth);
    if (answer) {
      // console.log(`i=${i}일때`);
      return 1;
    }
  }
  return 0;
}

function dfs(graph, node, depth) {
  visitedNode[node] = true;
  if (depth === 5) {
    answer = true;
    return;
  }
  for (let i = 0; i < graph[node].length; i++) {
    let next = graph[node][i];
    if (!visitedNode[next]) {
      dfs(graph, next, depth + 1);
    }
    if (answer) return;
  }
  visitedNode[node] = false;
}

console.log(solution(input));
