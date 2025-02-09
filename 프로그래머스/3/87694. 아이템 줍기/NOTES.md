# 풀이
- Difficulty:  Lv3
- Topic:  깊이/너비 우선 탐색(DFS/BFS)
- Elapsed Time:  30m
- Status:  O
- Memo:  풀긴 풀었는데 graph 를 두배로 확장시킨다는 아이디어는 힌트를 보고 해결했다.

## 내 풀이
- 지도 크기를 최대 가능 크기(50) 의 2배 이상으로 잡고
- 사각형을 우선 True로 칠하고, 사각형 내부만 False로 다시 칠해서 테두리만 남겼다. (사각형의 크기는 기존 *2)
- 사각형과 지도의 크기를 2배로 늘린 이유는 ㄷ 자와 ㅁ 자가 구분이 안될 수 있어서 이를 방지하기 위해 사이즈를 키움
- 그 외에는 단순 DFS 로 해결함
```py
import math


def solution(rectangle, characterX, characterY, itemX, itemY):
    SIZE = 102
    graph = [[False] * SIZE for _ in range(SIZE)]

    # 상, 하, 좌, 우 이동 방향
    dxdy = [(0, 1), (1, 0), (0, -1), (-1, 0)]

    for x1, y1, x2, y2 in rectangle:
        for x in range(x1 * 2, x2 * 2 + 1):
            for y in range(y1 * 2, y2 * 2 + 1):
                graph[y][x] = True

    for x1, y1, x2, y2 in rectangle:
        for x in range(x1 * 2 + 1, x2 * 2):
            for y in range(y1 * 2 + 1, y2 * 2):
                graph[y][x] = False

    stack = [(characterX * 2, characterY * 2, 0)]

    answer = math.inf
    while stack:
        x, y, cnt = stack.pop()
        print(x // 2, y // 2, cnt // 2)

        if x == itemX * 2 and y == itemY * 2:
            answer = min(cnt, answer)
            continue

        graph[y][x] = False
        for dx, dy in dxdy:
            nx = x + dx
            ny = y + dy
            if graph[ny][nx] == True:
                stack.append((nx, ny, cnt + 1))

    return answer // 2
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