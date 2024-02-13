# 다익스트라 알고리즘 (heapq 사용x)
import sys

INF = int(1e9)


def solution():
    input = sys.stdin.readline

    # n: 노드의 개수, m: 간선의 개수
    n, m = map(int, input().split())

    # 시작노드
    start = int(input())
    # 각 노드에 연결되어 있는 노드에 대한 정보를 저장
    graph = [[] for i in range(n + 1)]
    # 방문했는지 저장하기 위함
    visited = [False] * (n + 1)
    # 최단 거리 테이블을 모두 무제한으로 초기화
    distance = [INF] * (n + 1)

    # 간선 정보를 graph에 넣어야함. a -> b 로 이동하는데 들어가는 비용이 c
    for _ in range(m):
        a, b, c = map(int, input().split())
        graph[a].append((b, c))

    # 방문하지 않은 노드 중에서 가장 최단거리가 짧은 노드의 번호를 반환
    def get_smallest_node():
        min_value = INF
        index = 0  # 가장 최단 거리가 짧은 노드(인덱스)
        for i in range(1, n + 1):
            if not visited[i] and distance[i] < min_value:
                index = i
                min_value = distance[i]
        return index

    def dijkstra(start):
        distance[start] = 0
        visited[start] = True

        for j in graph[start]:
            distance[j[0]] = j[1]  # 해당 노드까지 가는 거리 업데이트

        # 시작 노드를 제외한 전체 n-1 노드에 대해 반복
        for _ in range(n - 1):
            now = get_smallest_node()
            visited[now] = True  # 방문처리

            for j in graph[now]:  # 현재 노드와 관련된 노드 거리 업데이트
                distance[j[0]] = min(distance[now] + j[1], distance[j[0]])

        return

    dijkstra(start)

    for i in range(1, n + 1):
        if distance[i] == INF:
            print("INFINITY")
        else:
            print(distance[i])


solution()
