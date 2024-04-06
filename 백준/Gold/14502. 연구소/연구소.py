from itertools import combinations
import copy


def solution():
    n, m = map(int, input().split())  # n: 세로, m: 가로
    graph = [[] for _ in range(n)]

    zero = []
    virus = []

    for i in range(n):
        a = list(map(int, input().split()))
        for j in range(len(a)):
            graph[i].append(a[j])
            if a[j] == 0:
                zero.append([i, j])
            elif a[j] == 2:
                virus.append([i, j])

    cases = list(combinations(zero, 3))

    result = 0
    for case in cases:
        count = bfs(copy.deepcopy(graph), case, copy.deepcopy(virus), n, m)
        result = max(count, result)
    return result


def bfs(graph, case, virus, n, m):
    d = [
        [0, 1],  # 오른쪽
        [1, 0],  # 아래
        [0, -1],  # 왼쪽
        [-1, 0],  # 위쪽
    ]

    for c in case:
        graph[c[0]][c[1]] = 1

    queue = virus

    while queue:
        node = queue.pop(0)

        for idx in range(4):
            x = node[0] + d[idx][0]
            y = node[1] + d[idx][1]

            # 범위 벗어나면 다음으로
            if y == m or x == n or x < 0 or y < 0:
                continue

            status = graph[x][y]
            if status == 0:  # 안전지대면 감염시키고 queue에 넣기
                graph[x][y] = 2
                queue.append((x, y))
                continue

    return check_zero(graph, n, m)


def check_zero(graph, n, m):
    # n: 세로, m: 가로

    cnt = 0
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 0:
                cnt += 1
    return cnt


print(solution())
