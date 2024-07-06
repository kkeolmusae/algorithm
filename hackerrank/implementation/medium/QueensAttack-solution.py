# 배열 안만들고 계산하는 방법

def queensAttack(n, k, r_q, c_q, obstacles):
    # Convert obstacles list to a set for O(1) lookups
    obstacle_set = set((r, c) for r, c in obstacles)
    
    directions = [
        (0, 1),  # East
        (1, 1),  # South-East
        (1, 0),  # South
        (1, -1), # South-West
        (0, -1), # West
        (-1, -1),# North-West
        (-1, 0), # North
        (-1, 1)  # North-East
    ]
    
    cnt = 0
    
    for dx, dy in directions:
        nx, ny = r_q, c_q
        
        while True:
            nx += dx
            ny += dy
            
            if nx < 1 or nx > n or ny < 1 or ny > n or (nx, ny) in obstacle_set:
                break
            
            cnt += 1
            
    return cnt
