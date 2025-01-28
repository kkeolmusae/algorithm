# 풀이
- Difficulty:  Lv2
- Topic:  Summer/Winter Coding(~2018)
- Elapsed Time:  15m
- Status:  O
- Memo: 처음에 1부터 n 까지 오름차순으로 해결해야하나 싶어서 시도했는데 실패했다. 역으로 n부터 1로 내림차순으로 시도하니 해결됨

## 내 풀이
```py
def solution(n):
    ans = 1
    while n != 1:
        if n % 2 == 0:  # 나누어 떨어지면
            n /= 2
        else:
            ans += 1
            n -= 1
    return ans
```