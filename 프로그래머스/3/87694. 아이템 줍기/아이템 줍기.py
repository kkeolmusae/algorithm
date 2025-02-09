import math


def solution(rectangle, characterX, characterY, itemX, itemY):
    SIZE = 102
    graph = [[False] * SIZE for _ in range(SIZE)]

    # 상, 하, 좌, 우 이동 방향
    dxdy = [(0, 1), (1, 0), (0, -1), (-1, 0)]

    for x1, y1, x2, y2 in rectangle:
        for x in range(x1 * 2, x2 * 2 + 1):
            for y in range(y1 * 2, y2 * 2 + 1):
                graph[y][x] = True

    for x1, y1, x2, y2 in rectangle:
        for x in range(x1 * 2 + 1, x2 * 2):
            for y in range(y1 * 2 + 1, y2 * 2):
                graph[y][x] = False

    stack = [(characterX * 2, characterY * 2, 0)]

    answer = math.inf
    while stack:
        x, y, cnt = stack.pop()
        print(x // 2, y // 2, cnt // 2)

        if x == itemX * 2 and y == itemY * 2:
            answer = min(cnt, answer)
            continue

        graph[y][x] = False
        for dx, dy in dxdy:
            nx = x + dx
            ny = y + dy
            if graph[ny][nx] == True:
                stack.append((nx, ny, cnt + 1))

    return answer // 2