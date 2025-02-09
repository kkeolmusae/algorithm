# 풀이
- Difficulty:  Lv2
- Topic:  깊이/너비 우선 탐색(DFS/BFS)
- Elapsed Time:  30m
- Status:  O 
- Memo: DFS 로 풀려다가 BFS 로 품. 최단거리를 구할때는 BFS를 기본적으로 쓰자

## 내 풀이
```py
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

```

## 다른 풀이
### Approach 1: DFS (Time Limit Exceed)
DFS로 풀면 시간오버남
```py
def solution(maps):
    n = len(maps[0])  # 가로 (열 개수)
    m = len(maps)  # 세로 (행 개수)

    # 방문한 위치를 저장하는 배열
    visited = [[False] * n for _ in range(m)]
    # 최단 거리 저장 (처음에는 매우 큰 값으로 설정)
    min_distance = [float("inf")]

    # 상, 하, 좌, 우 이동 방향
    dxdy = [(0, 1), (1, 0), (0, -1), (-1, 0)]

    def dfs(y, x, count):
        # 도착점에 도달하면 최솟값 갱신
        if y == m - 1 and x == n - 1:
            min_distance[0] = min(min_distance[0], count)
            return

        # 현재 위치 방문 처리
        visited[y][x] = True

        # 네 방향으로 이동
        for dy, dx in dxdy:
            ny, nx = y + dy, x + dx

            if 0 <= ny < m and 0 <= nx < n and maps[ny][nx] == 1 and not visited[ny][nx]:
                dfs(ny, nx, count + 1)

        # 백트래킹: 다른 경로를 탐색할 수 있도록 방문 기록 해제
        visited[y][x] = False

    # DFS 탐색 시작
    dfs(0, 0, 1)

    # 도착점까지 갈 수 없는 경우 -1 반환
    return min_distance[0] if min_distance[0] != float("inf") else -1

```