import sys
import heapq

INF = int(1e9)


def solution():
    input = sys.stdin.readline

    # n: 노드 수, m: 간선 수
    n, m = map(int, input().split())
    start = int(input())

    graph = [[] for _ in range(n + 1)]
    distance = [INF] * (n + 1)

    def set_graph():
        for _ in range(m):
            # a: 출발노드, b: 도착노드, c: 거리
            a, b, c = map(int, input().split())
            graph[a].append((b, c))

    def dijkstra(start_node):
        q = []
        # (노드거리, 노드번호) 로 push => 초기화
        heapq.heappush(q, (0, start_node))
        distance[start_node] = 0

        while q:
            dist, now_node = heapq.heappop(q)

            if distance[now_node] < dist:
                continue

            # next_node_cost: 거리, node_cost: 노드번호
            for next_node, next_node_cost in graph[now_node]:
                cost = next_node_cost + dist  # 새로 갱신할 비용

                # 기록된 거리값 > 새로 갱신할 거리값
                if distance[next_node] > cost:
                    distance[next_node] = cost
                    heapq.heappush(q, (cost, next_node))

    set_graph()
    dijkstra(start)

    for i in range(1, n + 1):
        if distance[i] == INF:
            print("INFINITY")
        else:
            print(distance[i])


solution()
