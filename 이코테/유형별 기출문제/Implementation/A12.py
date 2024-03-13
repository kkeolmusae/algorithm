# 오답 (삭제 조건에 대한 함수에 문제가 있다.)

# build_frame x,y,a,b
# x, y: 설치할 좌표
# a: 0=기둥, 1=보
# b: 0=삭제, 1=설치


# 기둥은 바닥 위에 있거나
# 보의 한쪽 끝 부분 위에 있거나,
# 또는 다른 기둥 위에 있어야 합니다.
def canBuildPillar(board, x, y):
    if y == 0 or board[x - 1][y] == 1 or board[x][y] == 1 or board[x][y - 1] == 0:
        return True
    return False


# 보는 한쪽 끝 부분이 기둥 위에 있거나,
# 또는 양쪽 끝 부분이 다른 보와 동시에 연결되어 있어야 합니다.
def canBuildBo(board, x, y):
    if (
        board[x + 1][y - 1] == 0  # 보 오른쪽편에 기둥이 세워지는 경우
        or board[x][y - 1] == 0  # 보 왼쪽편에 기둥이 세워지는 경우
        or (board[x - 1][y] == 1 and board[x + 1][y] == 1)
    ):
        return True
    return False


def canDestroyPillar(board, x, y):
    # 삭제하려는 보 왼쪽위에 기둥이 있는 경우, 보 오른쪽에 오른쪽에 기둥이 없어서 보에 붙은게 없는 경우
    if board[x][y] == 2:
        if board[x - 1][y] != 1 and board[x][y - 1] != 1:
            return False

    # 삭제하려는 보 오른쪽 위에 기둥이 있는 경우,
    if board[x + 1][y + 1] == 1:
        if board[x + 1][y] != 0 and board[x + 1][y] != 1:
            return False

    # 기둥 위에 기둥이 있고, 그 사이 왼쪽에 다른 보가 없는 경우
    if board[x][y + 1] == 0 and board[x - 1][y + 1] != 1:
        return False

    # 기둥 위에 기둥이 있고, 그 사이 오른쪽에 다른 보가 없는 경우
    if board[x][y + 1] == 0 and board[x1][y + 1] != 1:
        return False
    return True


def canDestroyBo(board, x, y):
    # 보 오른쪽 위에 기둥이 있고 오른쪽 밑에 기둥이 없고 그 옆에 보도 없으면
    if board[x + 1][y] == 1 and board[x + 1][y - 1] != 0 and board[x + 1][y] != 1:
        return False
    # 보 왼쪽 위에 기둥이 있고 왼쪽 밑에 기둥이 없고 그 옆에 보도 없으면
    if board[x][y] == 1 and board[x][y - 1] != 0 and board[x - 1][y] != 1:
        return False
    return True


def isPossible(board, x, y, a, b):
    if b == 1:  # 설치
        if a == 0:  # 기둥 설치
            return canBuildPillar(board, x, y)
        else:  # 보 설치
            return canBuildBo(board, x, y)
    else:
        if a == 0:  # 기둥 삭제 체크
            return canDestroyPillar(board, x, y)
        else:
            return canDestroyBo(board, x, y)


def solution(n, build_frame):
    board = [[-1] * (n + 1) for _ in range(n + 1)]

    for i in range(len(build_frame)):
        x, y, a, b = build_frame[i]

        if b == 1:
            if a == 1:
                print(f"설치 {x},{y} 위치에 보")
            else:
                print(f"설치 {x},{y} 위치에 기둥")
        else:
            if a == 1:
                print(f"삭제 {x},{y} 위치에 보")
            else:
                print(f"삭제 {x},{y} 위치에 기둥")

        if isPossible(board, x, y, a, b):
            if b == 1:  # 설치
                if board[x][y] == -1:  # 아무것도 설치가 안되어있으면
                    board[x][y] = a
                else:  # 이미 설치가 되어있으면 ?
                    print(board[x][y])
            else:  # 삭제
                board[x][y] = -1

    answer = []
    for i in range(len(board)):
        for j in range(len(board)):
            if board[i][j] != -1:
                answer.append([i, j, board[i][j]])
    return answer


solution(
    5,
    [
        [0, 0, 0, 1],
        [2, 0, 0, 1],
        [4, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [2, 1, 1, 1],
        [3, 1, 1, 1],
        [2, 0, 0, 0],
        [1, 1, 1, 0],
        [2, 2, 0, 1],
    ],
)
