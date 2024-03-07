def solution():
    n = int(input())
    x, y = 1, 1
    plans = input().split()

    # L, R, U, D 순서
    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0]
    move_type = ["L", "R", "U", "D"]

    # 이동 계획을 하나씩 확인
    for plan in plans:

        # 이동 후 좌표 구하기
        for i in range(len(move_type)):
            if plan == move_type[i]:
                nx = x + dx[i]
                ny = x + dy[i]

        # 공간을 벗어나는 경우면 무시 (x,y 업데이트 안함)
        if nx < 1 or ny < 1 or nx > n or ny > n:
            continue
        x, y = nx, ny

    print(x, y)


solution()
