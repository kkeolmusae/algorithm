INF = int(1e9)


def solution():
    # n: 회사수, m: 간선수
    n, m = map(int, input().split())
    graph = [[] * (n + 1) for _ in range(n + 1)]

    for i in range(n + 1):
        graph[i][i] = 0

    for _ in range(m):
        a, b = map(int, input().split())
        graph[a][b] = 1
        graph[b][a] = 1

    # x: 회사, k: 회사
    x, k = map(int, input().split())

    for s in range(1, n + 1):
        for i in range(1, n + 1):
            for j in range(1, n + 1):
                graph[i][j] = min(graph[i][j], graph[i][s] + graph[s][j])

    if graph[1][k] == INF or graph[k][x] == INF:
        return -1

    return graph[1][k] + graph[k][x]


print(solution())
