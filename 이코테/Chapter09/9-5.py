import sys
import heapq

INF = int(1e9)


def solution():
    input = sys.stdin.readline

    # n: 도시개수, m: 통로 개수, c: 메세지를 보내고자 하는 도시
    n, m, c = map(int, input().split())
    graph = [[] for _ in range(n + 1)]
    distance = [INF] * (n + 1)

    # x -> y 로 메세지가 전달되는데 걸리는 시간 z
    for _ in range(m):
        x, y, z = map(int, input().split())
        graph[x].append((y, z))

    def dijkstra(start):
        q = []

        # 전달되는 시간, 전달하고자 하는 도시
        heapq.heappush(q, (0, start))
        distance[c] = 0

        while q:
            time, city = heapq.heappop(q)

            if distance[city] < time:
                continue

            for side_city, transfer_time in graph[city]:
                cost = transfer_time + time
                if distance[side_city] > cost:
                    heapq.heappush(q, (cost, side_city))
                    distance[side_city] = cost

    dijkstra(c)

    city_count = 0  # 도시의 개수
    time = 0  # 총 걸리는 시간

    for i in range(1, n + 1):
        if distance[i] != INF:
            city_count += 1
        time = max(distance[i], time)

    # 출발 도시 제외해야해서 -1
    return city_count - 1, time


print(solution())
