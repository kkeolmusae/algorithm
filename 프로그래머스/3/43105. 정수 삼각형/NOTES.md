# 풀이
- Difficulty:  Lv3
- Topic:  동적계획법(Dynamic Programming)
- Elapsed Time:  10m
- Status:  O 
- Memo:  그냥 점화식 잘 만드니깐 금방 풀렸다. 약간 자신이 생겼달까

## 내 풀이
```py
def solution(triangle):
    answer = 0

    if len(triangle) == 1:
        return triangle[0][0]

    for i in range(1, len(triangle)):
        for j in range(len(triangle[i])):
            triangle[i][j] = triangle[i][j] + max(
                0 if j - 1 < 0 else triangle[i - 1][j - 1],
                0 if len(triangle[i - 1]) <= j else triangle[i - 1][j],
            )
            answer = max(answer, triangle[i][j])

    return answer
```
