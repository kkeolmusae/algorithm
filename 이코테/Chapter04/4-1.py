# 상하좌우

from collections import deque


def solution():
    n = int(input())

    # map = [[0] * (n + 1) for _ in range(n + 1)]

    d = input().split()
    q = deque()
    for i in d:
        q.append(i)

    # 동 남 서 북 순으로
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    move_type = ["R", "D", "L", "U"]

    # 시작 위치 세팅
    x, y = 1, 1

    def get_next(x, y, s):
        for i in range(len(move_type)):
            if move_type[i] == s:
                x = x + dx[i]
                y = y + dy[i]
        # if s == "R":
        #     x = x + dx[0]
        #     y = y + dy[0]
        # elif s == "D":
        #     x = x + dx[1]
        #     y = y + dy[1]
        # elif s == "L":
        #     x = x + dx[2]
        #     y = y + dy[2]
        # else:
        #     x = x + dx[3]
        #     y = y + dy[3]
        return x, y

    while q:
        direction = q.popleft()
        nx, ny = get_next(x, y, direction)

        # 맵 안에 있으면
        if 0 < nx and nx < n and 0 < ny and ny:
            x = nx
            y = ny

    print(x, y)


solution()

# 5
# R R R U D D
