# 풀이
- Difficulty:  Lv3
- Topic:  동적계획법(Dynamic Programming)
- Elapsed Time:  15m
- Status:  O
- Memo:  dp 문제다. 웅덩이가 [x][y] 인지 [y][x] 인지 문제에 안적혀있는 문제가 있었다.

## 내 풀이
```py
def solution(m, n, puddles):
    dp = [[0] * (m + 1) for _ in range(n + 1)]
    # m: 가로, n: 세로

    # 웅덩이 = -1
    for x, y in puddles:
        dp[x][y] = -1

    dp[1][1] = 1  # 출발 지점 = 1
    for x in range(1, n + 1):
        for y in range(1, m + 1):
            if x == 1 and y == 1:
                continue
            if dp[x][y] == -1:
                dp[x][y] = 0
            else:
                dp[x][y] = dp[x - 1][y] + dp[x][y - 1]

    return dp[n][m] % 1000000007
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
