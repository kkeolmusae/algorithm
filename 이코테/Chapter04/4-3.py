# 왕실의 나이트
# 나이트의 현재 좌표를 입력받고, 나이트가 이동할 수 있는 경우의 수를 계산해서 리턴

# ord: 하나의 문자를 인자로 받고 해당 문자에 해당하는 유니코드 정수를 반환합니다.
# ord('a')를 넣으면 정수 97을 반환합니다.


def solution():
    cnt = 0

    # 행(row): 1~8 열(column): a~h
    x, y = list(input())  # 나이트 현재 좌표

    x = int(ord(x) - ord("a") + 1)
    y = int(y)

    # 시계방향으로 1,2,4,5,7,8,10,11 시 방향 순서
    dx = [-2, -1, 1, 2, 2, 1, -1, -2]
    dy = [1, 2, 2, 1, -1, -2, -2, -1]

    for i in range(8):
        nx = dx[i] + x
        ny = dy[i] + y

        if nx >= 1 and nx <= 8 and ny >= 1 and ny <= 8:
            cnt += 1

    return cnt


solution()
