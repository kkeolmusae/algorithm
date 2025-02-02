# 풀이
- Difficulty:  Lv1
- Topic:  PCCE 기출문제
- Elapsed Time:  5m
- Status:  O 
- Memo:  DFS/BFS 문제 풀때처럼 오아왼위 방향의 값을 체크하기만하면 해결되는 문제

## 내 풀이
```py
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
```

## 다른 풀이
### Approach 1:
```py
```

### Approach 2:
```py
```

### Approach 3:
```py
```

### Approach 4:
```py
```

### Approach 5:
```py
```