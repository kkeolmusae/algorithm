# 풀이
- Difficulty:  Lv2
- Topic:  연습문제
- Elapsed Time:  5m
- Status:  O 
- Memo: 숫자를 이진수로 변환하는 함수(`bin`) 을 알고나서 푸니 쉽게 풀림.

## 내 풀이
```py
def solution(n):
    one_cnt = bin(n).count("1")

    while True:
        n = n + 1
        if one_cnt == bin(n).count("1"):
            return n
```