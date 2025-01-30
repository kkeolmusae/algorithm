def solution(board, h, w):
    dxdy = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # 오 아 왼 위 방향으로 회전
    width = len(board[0])
    height = len(board)
    color = board[h][w]

    answer = 0
    for dx, dy in dxdy:
        nx = h + dx
        ny = w + dy

        if (
            0 <= nx
            and nx < width
            and 0 <= ny
            and ny < height
            and color == board[nx][ny]
        ):
            answer += 1

    return answer