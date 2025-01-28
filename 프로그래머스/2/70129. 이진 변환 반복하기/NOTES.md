# 풀이
- Difficulty: Lv2
- Topic:  월간 코드 챌린지 시즌1
- Elapsed Time:  5m
- Status:  O
- Memo:  딱히 어려움이 없었던 문제. 그냥 문제 그대로 구현하니 해결됨

## 내 풀이
```py
def solution(s):
    zero_cnt = 0
    try_cnt = 0
    
    while s != "1":
        zero = 0
        for i in s:
            if i == "0":
                zero += 1
        # zero = 0 개수 
        try_cnt += 1
        zero_cnt += zero
        
        # s 길이 - zero => 변환
        s = bin(len(s) - zero)[2:]
        
    return [try_cnt, zero_cnt]
```