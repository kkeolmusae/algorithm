# 풀이
- Difficulty:  Lv3
- Topic:  깊이/너비 우선 탐색(DFS/BFS)
- Elapsed Time:  10m
- Status:  O
- Memo:  막 어려운 문제는 아니었다. 그냥 풀만한 수준?

## 내 풀이
```py
from collections import deque


def solution(n, computers):
    answer = 0
    graph = [False] * n

    for comIdx in range(n):
        if graph[comIdx]:
            continue

        q = deque()
        q.append(comIdx)
        graph[comIdx] = True

        while q:
            idx = q.popleft()
            for nIdx in range(n):
                isConnect = computers[idx][nIdx]

                if isConnect and not graph[nIdx]:
                    graph[nIdx] = True
                    q.append(nIdx)
        answer += 1

    return answer
```