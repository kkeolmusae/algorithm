# 다익스트라 알고리즘 (heapq 사용)
import sys
import heapq

INF = int(1e9)


def solution():
    input = sys.stdin.readline

    # n: 노드개수, m: 간선개수
    n, m = map(int, input().split())
    start = int(input())
    graph = [[] for _ in range(n + 1)]
    distance = [INF] * (n + 1)

    for _ in range(m):
        a, b, c = map(int, input().split())
        graph[a].append((b, c))

    def dijkstra(start):
        q = []

        # 시작노드에 대해서 (노드거리, 노드번호) 초기화
        heapq.heappush(q, (0, start))
        distance[start] = 0

        while q:
            # 가장 최단 거리가 짧은 노드 하나 꺼내옴
            dist, now = heapq.heappop(q)

            # 현재 노드가 처리된 적 있는 노드라면 다음꺼로
            if distance[now] < dist:
                continue

            # now 노드에서 side_node[0], 노드 까지의 거리가 side_node[1]
            # 인접노드 체크
            for side_node in graph[now]:
                # Q? distance[now]랑 dist랑 달라질 수 있나?
                cost = distance[now] + side_node[1]  # 갱신된 거리 값

                # 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧으면
                if cost < distance[side_node[0]]:
                    distance[side_node[0]] = cost
                    heapq.heappush(q, (cost, side_node[0]))

    dijkstra(start)

    for i in range(1, n + 1):
        if distance[i] == INF:
            print("INFINITY")
        else:
            print(distance[i])


solution()
