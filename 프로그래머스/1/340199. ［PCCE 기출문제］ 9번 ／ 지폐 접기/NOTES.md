# 풀이
- Difficulty:  Lv1
- Topic:  PCCE 기출문제
- Elapsed Time:  2m
- Status:  O
- Memo:  그냥 지문 그대로 품

## 내 풀이
```py
def solution(wallet, bill):
    answer = 0
    while min(wallet) < min(bill) or max(wallet) < max(bill):
        if bill[0] < bill[1]:
            bill[1] = int(bill[1] / 2)
        else:
            bill[0] = int(bill[0] / 2)
        answer += 1

    return answer
```
