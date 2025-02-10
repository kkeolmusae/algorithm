# 풀이
- Difficulty:  Lv3
- Topic:  연습문제
- Elapsed Time:  15m
- Status:  -
- Memo:  다른 사람들이 규칙을 보고 계산한 것을 보고 단순화하여 풀었다.

## 내 풀이
주석에 달린 설명만 이해하면 반복문 없이 해결이 가능하다.
```py
# s를 n개의 원소로 균등하게 나누되, 가능한 한 곱이 최대가 되도록 만들어야 합니다.
# 곱을 최대화하려면 모든 원소가 서로 비슷한 값을 가져야 합니다.
# s // n을 기본 값으로 하되, 나머지(s % n)를 고려하여 일부 원소에 +1을 추가해야 합니다.


def solution(n, s):
    if n > s:
        return [-1]

    quotient = s // n  # 몫
    remainder = s % n  # 나머지

    # 몫으로 채우고, 나머지 만큼을 +1 해주기
    answer = [quotient] * (n - remainder) + [quotient + 1] * remainder
    return answer
```
