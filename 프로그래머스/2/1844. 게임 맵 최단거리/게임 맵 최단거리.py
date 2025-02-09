from collections import deque

def solution(maps):
    n = len(maps[0])  # 가로 (열 개수)
    m = len(maps)  # 세로 (행 개수)

    # 상, 하, 좌, 우 이동 방향
    dxdy = [(0, 1), (1, 0), (0, -1), (-1, 0)]

    # BFS 초기 설정
    queue = deque([(0, 0, 1)])  # (y, x, 거리)
    visited = set()
    visited.add((0, 0))

    while queue:
        y, x, dist = queue.popleft()

        # 도착점에 도달하면 거리 반환
        if y == m - 1 and x == n - 1:
            return dist

        for dy, dx in dxdy:
            ny, nx = y + dy, x + dx

            if 0 <= ny < m and 0 <= nx < n and maps[ny][nx] == 1 and (ny, nx) not in visited:
                visited.add((ny, nx))
                queue.append((ny, nx, dist + 1))

    return -1  # 도착할 수 없는 경우
