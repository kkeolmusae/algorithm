# 풀이
- Difficulty:  Lv1
- Topic:  연습문제
- Elapsed Time:  10m
- Status:  O 
- Memo: 최소한의 시간복잡도로 하려고 시도하다보니 공간복잡도가 좀 올라간듯. 어렵진않았다.

## 내 풀이
```py
from collections import defaultdict


def solution(s, skip, index):
    skip_set = set()

    for a in skip:
        skip_set.add(a)

    alpha_arr = []
    alpha_idx = defaultdict(int)
    a_ascii = 97
    z_ascii = 122
    idx = 0
    for alpha_ascii in range(a_ascii, z_ascii + 1):
        alpha = chr(alpha_ascii)
        if alpha in skip_set:
            continue
        alpha_arr.append(alpha)
        alpha_idx[alpha] = idx
        idx += 1

    answer = ""
    alpha_length = len(alpha_idx)
    for st in s:
        answer += alpha_arr[(alpha_idx[st] + index) % alpha_length]

    return answer
```