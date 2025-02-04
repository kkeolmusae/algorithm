# 풀이
- Difficulty:  Lv3
- Topic:  깊이/너비 우선 탐색(DFS/BFS)
- Elapsed Time:  30m
- Status:  O 
- Memo:  풀긴풀었는데 플루이드워셜 알고리즘(A->B 까지 가는데 걸리는 최단 경로 구할때 사용)이 기억 안나서 검색해서 풀었다.

## 내 풀이
```py
def solution(begin, target, words):
    MAX_NUM = 51
    if target not in words:  # target이 words에 없는 경우
        return 0

    words.append(begin)  # words에 begin 넣어둠

    n = len(words)
    l = len(begin)
    graph = [[MAX_NUM] * n for _ in range(n)]

    for i in range(n):
        for j in range(n):
            if i == j:
                graph[i][j] = 0
                graph[j][i] = 0
                continue
            if words[i] == words[j]:  # 기존 words 에 begin과 같은게 있는 경우
                return 1
            cnt = 0
            for idx in range(l):
                if words[i][idx] == words[j][idx]:
                    cnt += 1
            if cnt == l - 1:
                graph[i][j] = 1
                graph[j][i] = 1

    for k in range(n):
        for i in range(n):
            for j in range(n):
                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
    return graph[-1][words.index(target)]
```