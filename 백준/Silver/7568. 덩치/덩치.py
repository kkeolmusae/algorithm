# 7568 덩치

import heapq


def solution():
    n = int(input())
    q = []
    for _ in range(n):
        x, y = map(int, input().split())
        q.append((x, y))

    answer = []
    for i in q:
        rank = 1
        for j in q:
            if i[0] < j[0] and i[1] < j[1]:  # 나보다 큰애가 있으면 랭크 증가
                rank += 1
        answer.append(str(rank))

    return " ".join(answer)


print(solution())
