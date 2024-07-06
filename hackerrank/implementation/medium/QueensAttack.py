

def make_board(n):
    return [[0] * (n + 1) for _ in range(n + 1)]

def queensAttack(n, k, r_q, c_q, obstacles):
    board = make_board(n)
    cnt = 0
    queen = [c_q, r_q]
    # east -> south -> west -> north
    dx = [0, 1, 1, 1, 0, -1, -1, -1]
    dy = [1, 1, 0, -1, -1, -1, 0, 1]
    board[c_q][r_q] = 2
    
    for x, y in obstacles:
        board[y][x] = 1
    
    for direction in range(len(dx)):
        while True:
            nx = queen[0] + dx[direction]
            ny = queen[1] + dy[direction]
            
            if nx > n or ny > n or board[nx][ny] == 1 or nx<= 0 or ny<=0 :
                break
            cnt += 1

            queen = [nx, ny]
        queen = [c_q, r_q]

    return cnt

# print(queensAttack(5,3,4,3,[[5,5],[4,2],[2,3]]))
print(queensAttack(100000,0,4187,5068,[]))

