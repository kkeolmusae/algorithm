from collections import deque


def solution():
    # 보드 세팅
    n = int(input())
    board = [[0] * (n + 2) for _ in range(n + 2)]

    for i in range(n + 2):
        for j in range(n + 2):
            if i == 0 or j == 0 or i == n + 1 or j == n + 1:
                board[i][j] = -1

    # 사과 세팅
    k = int(input())
    for _ in range(k):
        x, y = map(int, input().split())
        board[x][y] = 1

    l = int(input())
    orders = deque()
    for _ in range(l):
        x, c = input().split()
        orders.append((int(x), c))

    # 방향 데이터 (초기 뱀머리는 오른쪽이니깐 [0]에 1,0 세팅, 동남서북 순으로 세팅)
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]

    def turn(direction, x):
        # 왼쪽으로 회전하는 경우면 예를들어 동 -> 북이면 dxdy[0] -> dxdy[3] 이므로 -1 해야함
        if x == "L":
            direction = (direction - 1) % 4
        else:
            direction = (direction + 1) % 4
        return direction

    def simuation():
        x, y = 1, 1  # 뱀 머리 위치
        board[x][y] = 2  # 뱀이 있는 곳은 2 로 세팅
        time = 0  # 걸린 시간
        direction = 0  # 뱀 머리 방향
        snake = [(x, y)]  # 뱀이 차지하고 있는 공간

        while True:
            # 다음에 이동할 위치
            nx = x + dx[direction]
            ny = y + dy[direction]

            # 범위 안에 있고, 다음 위치에 뱀의 몸통이 있지 않으면
            if board[nx][ny] != -1 and board[nx][ny] != 2:
                # 사과가 있으면 꼬리 유지하고 다음위치에 머리 세팅
                if board[nx][ny] == 1:
                    snake.append((nx, ny))  # 뱀 범위 늘리고
                    board[nx][ny] = 2  # 맵에 뱀 위치넣고

                # 사과가 없으면 꼬리 없애고 머리 위치 옮겨줘야함
                if board[nx][ny] == 0:
                    board[nx][ny] = 2
                    snake.append((nx, ny))  # 뱀 이동했으니깐 뱀 범위 새로 넣어주기

                    px, py = snake.pop(0)  # 뱀 꼬리 위치
                    board[px][py] = 0  # 꼬리 위치 없앴으니깐 0으로 바꿔줘야함
            else:
                # 범위 벗어나거나 몸에 부딫히면 시간 증가시키고 끝
                time += 1
                break

            x = nx
            y = ny
            time += 1

            # 방향을 바꿀때가 되었으면
            if orders and time == orders[0][0]:
                t, c = orders.popleft()  # t: 방향 전환할 시간, c: 다음 방향
                direction = turn(direction, c)

        return time

    return simuation()


print(solution())
