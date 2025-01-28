# 풀이
- Difficulty:  Lv2
- Topic:  2017 팁스타운
- Elapsed Time:  10m
- Status:  O
- Memo: 처음 stack 생각 못하고 풀었다가 헤맸음. 근데 stack 쓰면 되겠다고 생각한 순간부터는 금방 구현함

## 내 풀이
```py
def solution(n):
    q = []
    i = 0
    while i < len(n):
        if q and q[-1] == n[i]:
            q.pop()
        else:
            q.append(n[i])
        i += 1
    return 1 if not len(q) else 0
```