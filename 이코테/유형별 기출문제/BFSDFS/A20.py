"""
입력
첫째 줄에 N, L, R이 주어진다. (1 ≤ N ≤ 50, 1 ≤ L ≤ R ≤ 100)

둘째 줄부터 N개의 줄에 각 나라의 인구수가 주어진다. r행 c열에 주어지는 정수는 A[r][c]의 값이다. (0 ≤ A[r][c] ≤ 100)

인구 이동이 발생하는 일수가 2,000번 보다 작거나 같은 입력만 주어진다.

출력
인구 이동이 며칠 동안 발생하는지 첫째 줄에 출력한다.

"""

import math

# 북 동 남 서
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def solution():
    n, l, r = map(int, input().split())

    graph = []

    for _ in range(n):
        graph.append(list(map(int, input().split())))

    while True:
        visited = [[-1] * (n) for _ in range(n)]  # 방문 기록
        for i in range(n):
            for j in range(n):
                if visited[i][j] == -1:
                    result = bfs(graph, n, l, r, 0, i, j)

    return result


def bfs(graph, n, l, r, count, i, j):
    visited = [[0] * (n) for _ in range(n)]  # 방문 기록
    same = [[0] * (n) for _ in range(n)]  # 동일 기록

    s = set()
    q = []
    tq = []
    idx = 1

    q.append((i, j))
    while q or tq:
        if len(q) == 0 and len(tq):
            q = tq
            tq = []
            idx += 1

        x, y = q.pop(0)

        if visited[x][y] == 1:
            continue

        visited[x][y] = 1

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            # 구간 안에있는 경우에만 처리
            if 0 <= nx and nx < n and 0 <= ny and ny < n:
                dif = abs(graph[nx][ny] - graph[x][y])

                if l <= dif and dif <= r:
                    same[nx][ny] = idx
                    s.add((nx, ny))
                    q.append((nx, ny))  # 둘러본적 없으니깐 넣어줘야해
                else:
                    tq.append((nx, ny))  # 둘러본적 없으니깐 넣어줘야해

    if len(s):
        total = []
        for i in s:
            x, y = i
            total.append(graph[x][y])
        avr = math.floor(sum(total) / len(total))

        for i in range(n):
            for j in range(n):
                if same[i][j] == 1:
                    graph[i][j] = avr

        return bfs(graph, n, l, r, count + 1)
    else:
        return count


print(solution())
