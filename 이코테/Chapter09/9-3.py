INF = int(1e9)


def solution():
    n = int(input())  # 노드 수
    m = int(input())  # 간선 수
    graph = [[INF] * (n + 1) for _ in range(n + 1)]  # 그래프 초기화

    # 노드별 거리 입력받기
    for _ in range(m):
        a, b, c = map(int, input().split())
        graph[a][b] = c

    # 자기 자신 -> 자기 자신 에 대한 거리값 0으로 세팅
    for i in range(1, n + 1):
        graph[i][i] = 0

    print(graph)
    for k in range(1, n + 1):
        for i in range(1, n + 1):
            for j in range(1, n + 1):
                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
    print(graph)


solution()
