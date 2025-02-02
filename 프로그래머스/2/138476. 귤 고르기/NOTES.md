# 풀이
- Difficulty:  Lv2
- Topic:  연습문제
- Elapsed Time:  5m
- Status:  O 
- Memo: heapq 써서 쉽게 풀었다.

## 내 풀이
```py
from collections import defaultdict
import heapq


def solution(k, tangerine):
    dict = defaultdict(int)
    q = []

    # 귤 사이즈별로 몇개있는지
    for tan in tangerine:
        dict[tan] += 1

    # 같은 사이즈의 귤이 많은 순서대로 넣기
    for size in dict:
        heapq.heappush(q, (-dict[size], size))

    answer = 0
    while k > 0:
        # 귤이 많은 것부터 꺼내고
        count, size = heapq.heappop(q)
        k -= -count # 귤 개수 만큼 k 감소
        answer += 1
    return answer
```
