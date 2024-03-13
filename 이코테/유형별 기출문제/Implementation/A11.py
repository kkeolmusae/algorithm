# 오답

from collections import deque

# 입력
# 첫째 줄에 보드의 크기 N이 주어진다. (2 ≤ N ≤ 100) 다음 줄에 사과의 개수 K가 주어진다. (0 ≤ K ≤ 100)

# 다음 K개의 줄에는 사과의 위치가 주어지는데, 첫 번째 정수는 행, 두 번째 정수는 열 위치를 의미한다.
# 사과의 위치는 모두 다르며, 맨 위 맨 좌측 (1행 1열) 에는 사과가 없다.

# 다음 줄에는 뱀의 방향 변환 횟수 L 이 주어진다. (1 ≤ L ≤ 100)

# 다음 L개의 줄에는 뱀의 방향 변환 정보가 주어지는데, 정수 X와 문자 C로 이루어져 있으며.
# 게임 시작 시간으로부터 X초가 끝난 뒤에 왼쪽(C가 'L') 또는 오른쪽(C가 'D')로 90도 방향을 회전시킨다는 뜻이다.
# X는 10,000 이하의 양의 정수이며, 방향 전환 정보는 X가 증가하는 순으로 주어진다.

# 해야하는거 -> 보드 만들기
# 1. (N+1) 사이즈의 보드 만들고 테두리쪽 값 -1 로 채우기
# 2. 사과 입력 받아서 보드에 업데이트하기
# 3. 뱀 이동 경로 받기 (q로 받아서 pop하면서 처리하면될듯)


def make_board():
    board_size = int(input())  # 보드의 크기
    board = [[0] * (board_size + 2) for _ in range(board_size + 2)]

    for i in range(board_size + 2):
        for j in range(board_size + 2):
            if i == 0 or j == 0 or i == board_size + 1 or j == board_size + 1:
                board[i][j] = -1
    return board


def set_apple(board):
    K = int(input())  # 사과의 개수
    for _ in range(K):
        x, y = map(int, input().split())
        board[x][y] = 1


def set_orders():
    q = deque()
    L = int(input())
    for _ in range(L):
        X, C = input().split()
        q.append((int(X), C))
    return q


def move(board, snake, direction, time, count):
    for _ in range(time):
        for _ in range(len(snake)):
            prev_x, prev_y = snake.pop()  # 뱀의 현재 위치
            if direction == "r":
                if board[prev_x][prev_y + 1] <= -1:
                    return [True, count]

                if board[prev_x][prev_y + 1] == 1:
                    snake.append((prev_x, prev_y))
                    board[prev_x][prev_y] = -2
                else:
                    board[prev_x][prev_y] = 0  # 꼬리 줄여야함

                snake.append((prev_x, prev_y + 1))
                board[prev_x][prev_y + 1] = -2  # 이동한거 기록하고
            elif direction == "l":
                if board[prev_x][prev_y - 1] <= -1:
                    return [True, count]

                if board[prev_x][prev_y - 1] == 1:
                    snake.append((prev_x, prev_y))
                    board[prev_x][prev_y] = -2
                else:
                    board[prev_x][prev_y] = 0  # 꼬리 줄여야함

                snake.append((prev_x, prev_y - 1))
                board[prev_x][prev_y - 1] = -2  # 이동한거 기록하고
            elif direction == "u":
                if board[prev_x - 1][prev_y] <= -1:
                    return [True, count]

                if board[prev_x - 1][prev_y] == 1:
                    snake.append((prev_x, prev_y))
                    board[prev_x][prev_y] = -2
                else:
                    board[prev_x][prev_y] = 0  # 꼬리 줄여야함

                snake.append((prev_x - 1, prev_y))
                board[prev_x - 1][prev_y] = -2  # 이동한거 기록하고
            else:
                if board[prev_x + 1][prev_y] <= -1:
                    return [True, count]

                if board[prev_x + 1][prev_y] == 1:  # 사과가 있으면
                    snake.append((prev_x, prev_y))  # 꼬리 안줄이니깐 그대로 다시 넣고
                    board[prev_x][prev_y] = -2
                else:  # 사과 없으면
                    board[prev_x][prev_y] = 0  # 꼬리 줄여야함

                snake.append((prev_x + 1, prev_y))  # 머리 넣고
                board[prev_x + 1][prev_y] = -2  # 이동한거 기록하고
        count += 1
    return [False, count]


# X: L left, D right
def change_direction(direction, X):
    if direction == "r":  # 우측을 보고 있을때
        if X == "L":
            direction = "u"
        else:
            direction = "d"
    elif direction == "u":  # 아래를 보고 있을때
        if X == "L":
            direction = "r"
        else:
            direction = "l"
    elif direction == "l":  # 좌측을 보고 있을때
        if X == "L":
            direction = "d"
        else:
            direction = "u"
    else:  # 위를 보고 있을때
        if X == "L":
            direction = "l"
        else:
            direction = "r"
    return direction


def solution():
    board = make_board()
    board[1][1] = -2
    snake = deque()
    snake.append((1, 1))
    direction = "r"

    set_apple(board)

    q = set_orders()

    cnt = 0
    while q:
        X, C = q.popleft()  # X: 시간, C: 방향전환
        [isFinish, result] = move(board, snake, direction, X, cnt)
        cnt += result
        if isFinish:
            cnt += 1
            return cnt
        direction = change_direction(direction, C)


print(solution())
