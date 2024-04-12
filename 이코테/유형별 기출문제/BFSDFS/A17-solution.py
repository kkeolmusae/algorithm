"""
A17 경쟁전 전염 (난이도 2)
각 바이러스가 낮은 번호 부터 증식한다 -> deque 사용

"""

from collections import deque


def solution():
    n, k = map(int, input().split())

    graph = []  # 전체 보드 정보를 담는 리스트
    data = []  # 바이러스에 대한 정보를 담는 리스트

    for i in range(n):
        # 보드 정보를 한 줄 단위로 입력
        graph.append(list(map(int, input().split())))
        for j in range(n):
            # 해당 위치에 바이러스가 존재하는 경우
            if graph[i][j] != 0:
                # (바이러스 종류, 시간, 위치x, 위치 y) 삽인
                data.append((graph[i][j], 0, i, j))

    # 정렬 이후에 큐로 옮기기(낮은 번호의 바이러스가 먼저 증식하기 떄문에)
    data.sort()
    q = deque(data)

    target_s, target_x, target_y = map(int, input().split())

    # 바이러스가 퍼져나갈 수 있는 4가지 위치
    # 북, 동, 남, 서 순서
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    # bfs
    while q:
        (
            virus,
            s,
            x,
            y,
        ) = q.popleft()
        # 정확히 s 초가 지나거나 큐가 빌떄까지 반복
        if s == target_s:
            break

        # 현재 노드에서 주변 4가지 위치를 각각 확인
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            # 해당 위치로 이동할 수 있는 경우
            if 0 <= nx and nx < n and 0 <= ny and ny < n:
                # 아직 방문안한 위치라면, 그 위치에 바이러스 넣기
                if graph[nx][ny] == 0:
                    graph[nx][ny] = virus
                    q.append((virus, s + 1, nx, ny))

    return graph[target_x - 1][target_y - 1]


print(solution())
