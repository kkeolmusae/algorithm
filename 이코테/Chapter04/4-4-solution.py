def solution():
    # n, m을 공백으로 구분하여 입력받기. n: 세로, m: 가로
    n, m = map(int, input().split())

    # 방문한 위치를 저장하기 위한 맵을 생성하여 0으로 초기화
    d = [[0] * m for _ in range(n)]

    # 현재 캐릭터의 x y 좌표랑 방향 입력받기
    x, y, direction = map(int, input().split())
    d[x][y] = 1  # 캐릭터 최초위치 방문처리

    # 전체 맵 정보를 입력받기
    maps = []
    for _ in range(n):
        maps.append(list(map(int, input().split())))

    # 북 동 남 서 방향 정의
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    def turn_left(direction):
        direction -= 1
        if direction == -1:
            direction = 3
        return direction

    # 시뮬레이션 시작
    count = 1
    turn_time = 0
    while True:
        # 왼쪽으로 회전
        direction = turn_left(direction)
        nx = x + dx[direction]
        ny = y + dx[direction]

        # 회전한 이후 정면에 가보지 않은 칸이 존재하는 경우 이동
        if d[nx][ny] == 0 and maps[nx][ny] == 0:
            d[nx][ny] = 1
            x = nx
            y = ny
            count += 1
            turn_time = 0
            continue
        else:  # 회전한 이후 정면에 가보지 않은 칸이 없거나 바다인 경우
            turn_time += 1

        # 네 방향 모두 갈 수 없으면
        if turn_time == 4:
            nx = x - dx[direction]
            ny = y - dy[direction]

            # 뒤로 갈 수 있다면 이동하기
            if maps[nx][ny] == 0:
                x = nx
                y = ny
            else:
                break
            turn_time = 0

    return count


print(solution())
