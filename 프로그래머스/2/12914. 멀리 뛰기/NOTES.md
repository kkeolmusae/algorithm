# 풀이
- Difficulty:  Lv2
- Topic:  연습문제
- Elapsed Time:  5m
- Status:  O 
- Memo: 걍 dp 기초 문제

## 내 풀이
```py
def solution(n):
    if n < 3:
        return n

    dp = [0] * (n + 1)  # n 까지 도달할 수 있는 방법
    dp[0] = 0
    dp[1] = 1  # 0 에서 한칸
    dp[2] = 2  # 0 에서 한칸, 두칸 방법

    for i in range(3, n + 1):
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567

    return dp[n]
```