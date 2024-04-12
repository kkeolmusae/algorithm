# 모든 도로의 거리는 '1' 이라는 조건 덕분에 너비 우선 탐색을 이용하여 해결이 가능하다.

from collections import deque


def solution():
    # n: 도시개수, m: 도로 개수, k: 거리정보, x: 출발 도시
    n, m, k, x = map(int, input().split())
    graph = [[] for _ in range(n + 1)]

    for _ in range(m):
        a, b = map(int, input().split())
        graph[a].append(b)

    # 모든 도시에 대한 최단 거리 초기화
    distance = [-1] * (n + 1)
    distance[x] = 0  # 출발 도시까지의 거리는 0 으로 설정

    # bfs 수행
    q = deque([x])
    while q:
        now = q.popleft()

        # 현재 도시에서 이동할 수 있는 모든 도시를 확인
        for next_node in graph[now]:
            # 아직 방문하지 않은 도시라면
            if distance[next_node] == -1:
                # 최단 거리 갱신
                distance[next_node] = distance[now] + 1
                q.append(next_node)

    # 최단 거리가 K인 모든 도시의 번호를 오름차순으로 정렬
    check = False
    for i in range(1, n + 1):
        if distance[i] == k:
            print(i)
            check = True

    if check == False:
        print(-1)
