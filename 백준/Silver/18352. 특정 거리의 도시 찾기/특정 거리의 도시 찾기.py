# 입력
# 첫째 줄에 도시의 개수 N, 도로의 개수 M, 거리 정보 K, 출발 도시의 번호 X가 주어진다.
# (2 ≤ N ≤ 300,000, 1 ≤ M ≤ 1,000,000, 1 ≤ K ≤ 300,000, 1 ≤ X ≤ N)
# 둘째 줄부터 M개의 줄에 걸쳐서 두 개의 자연수 A, B가 공백을 기준으로 구분되어 주어진다.
# 이는 A번 도시에서 B번 도시로 이동하는 단방향 도로가 존재한다는 의미다. (1 ≤ A, B ≤ N)
# 단, A와 B는 서로 다른 자연수이다.

# 출력
# X로부터 출발하여 도달할 수 있는 도시 중에서,
# 최단 거리가 K인 모든 도시의 번호를 한 줄에 하나씩 오름차순으로 출력한다.

# 이 때 도달할 수 있는 도시 중에서, 최단 거리가 K인 도시가 하나도 존재하지 않으면 -1을 출력한다.

from collections import deque


def bfs(graph, start_node, k):
    answer = []
    visit = [start_node]
    queue = deque([start_node])
    distance = [0] * len(graph)

    while queue:
        now = queue.popleft()

        # k 보다 큰건 확인할 필요없음
        if distance[now] > k:
            continue

        for next in graph[now]:
            if next not in visit:
                visit.append(next)
                queue.append(next)
                distance[next] = distance[now] + 1
                if distance[next] == k:
                    answer.append(next)

    return answer


def solution():
    # n: 도시개수, m: 도로 개수, k: 거리정보, x: 출발 도시
    n, m, k, x = map(int, input().split())
    graph = [[] for _ in range(n + 1)]

    for _ in range(m):
        a, b = map(int, input().split())
        graph[a].append(b)

    result = bfs(graph, x, k)

    if len(result) == 0:
        print(-1)
    else:
        result.sort()
        print(*result, sep="\n")


solution()
