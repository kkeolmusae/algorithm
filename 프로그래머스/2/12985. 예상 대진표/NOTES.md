# 풀이
- Difficulty:  Lv2
- Topic:  2017 팁스타운
- Elapsed Time:  10m
- Status:  O 
- Memo: 크게 어렵지 않았다.

## 내 풀이
```py
import math


def solution(n, a, b):
    if a > b:  # b가 큰 수가 되게
        a, b = b, a
    answer = 0

    # 두 수의 차이가 1이고 b가 짝수가 될때까지
    while abs(a - b) != 1 or b % 2 != 0: 
        a = math.ceil(a / 2)
        b = math.ceil(b / 2)
        answer += 1

    return answer + 1
```