# 풀이
- Difficulty:  Lv2
- Topic:  연습문제
- Elapsed Time:  5m
- Status:  O
- Memo: 프로그래머스의 파이썬 버전이 3.9 미만이라는 것을 알게 되었다.

## 내 풀이
```py
import math


def lcm(a, b):
    return a * b / math.gcd(a, b)


def solution(n):

    result = n[0]
    for i in range(1, len(n)):
        result = int(lcm(result, n[i]))

    return result
```
