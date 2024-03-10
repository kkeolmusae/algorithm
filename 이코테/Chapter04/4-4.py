# 3. 게임 개발


def solution():
    cnt = 0
    n, m = map(int, input().split())
    x, y, direction = map(int, input().split())

    # 북 동 남 서 방향 순서
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    board = []
    for _ in range(n):
        board.append(list(map(int, input().split())))

    def turn_left(direction):
        direction -= 1
        if direction < 0:
            direction = 3
        return direction

    try_cnt = 0
    while try_cnt < 4:
        if board[x][y] == 0:
            board[x][y] = 2  # 방문 처리
            cnt += 1

        direction = turn_left(direction)

        nx = x + dx[direction]
        ny = y + dy[direction]
        try_cnt += 1

        if board[nx][ny] == 0:  # 가본적 없는 곳이면 이동
            x = nx
            y = ny
            try_cnt = 0
    return cnt


print(solution())
