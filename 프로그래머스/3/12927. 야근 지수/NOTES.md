# 풀이
- Difficulty:  Lv3
- Topic:  연습문제
- Elapsed Time:  10m
- Status:  O 
- Memo:  heapq 써서 쉽게 풀었다이

## 내 풀이
```py
import heapq


def solution(n, works):
    answer = 0

    q = [-w for w in works]

    heapq.heapify(q)

    while n:
        if not q:
            break
        work = -heapq.heappop(q)
        work -= 1
        if work > 0:
            heapq.heappush(q, -work)
        n -= 1

    while q:
        work = -heapq.heappop(q)
        answer += work**2

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