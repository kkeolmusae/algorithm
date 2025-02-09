# 풀이
- Difficulty:  Lv2
- Topic:  깊이/너비 우선 탐색(DFS/BFS)
- Elapsed Time:  10m
- Status:  O 
- Memo:  재귀함수로 해결되는 문제. 재귀함수를 사용하는 DFS 기본 문제?

## 내 풀이
```py
def solution(numbers, target):
    global answer
    answer = 0

    def dfs(i, total):
        global answer
        if i == len(numbers):
            if target == total:
                answer += 1
            return

        dfs(i + 1, total + numbers[i])
        dfs(i + 1, total - numbers[i])

    dfs(0, 0)
    return answer
```