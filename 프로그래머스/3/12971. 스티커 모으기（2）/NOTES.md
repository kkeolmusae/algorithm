# 풀이
- Difficulty:  Lv3
- Topic:  Summer/Winter Coding(~2018)
- Elapsed Time:  12m
- Status:  O 
- Memo:  예전에 비슷한 문제를 리트코드에서 풀어봤어서 금방 품

## 내 풀이
스티커배열이 원형이라서 첫번쨰꺼를 뜯는 경우와(제일뒤에꺼 안뜯고) 첫번째꺼를 안뜯는 경우(제일뒤에꺼 뜯고) 를 나눠서 해결한 다음에 둘중 max 값을 리턴했다.
```py
def solution(sticker):
    n = len(sticker)
    if n == 1:
        return sticker[0]

    dp_a = [0] * n
    dp_b = [0] * n

    # 첫번째꺼 뜯는 경우
    dp_a[0] = sticker[0]
    dp_a[1] = max(dp_a[0], sticker[1])
    for i in range(2, n - 1):
        dp_a[i] = max(dp_a[i - 1], sticker[i] + dp_a[i - 2])

    # 첫번째꺼 안뜯는 경우
    dp_b[1] = sticker[1]
    for i in range(2, n):
        dp_b[i] = max(dp_b[i - 1], sticker[i] + dp_b[i - 2])

    return max(max(dp_a), max(dp_b))
```