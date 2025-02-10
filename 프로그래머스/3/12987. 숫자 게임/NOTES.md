# 풀이
- Difficulty:  Lv3
- Topic:  Summer/Winter Coding(~2018)
- Elapsed Time:  10m
- Status:  O 
- Memo:  게임할때처럼 풀었음. 질것같으면 걍 던지기? 미끼랄까

## 내 풀이
둘다 내림차순정렬한 다음에, A에서 제일 큰애랑 B에서 제일 큰애랑 비교했는데 B가 못이기면 B에서 제일 작은애를 소모하는 방법으로 해결함.
```py
def solution(A, B):
    A.sort(reverse=True)
    B.sort(reverse=True)

    answer = 0
    i = 0
    left = 0  # 가장 큰애
    right = len(B) - 1  # 가장 작은애

    while left <= right:
        # 가장 큰애끼리 붙는데 B가 지거나 비기는 경우 => 작은애 사용
        if A[i] >= B[left]:
            right -= 1
        else:
            left += 1
            answer += 1
        i += 1

    return answer
```