from collections import deque


def solution():
    N, K = map(int, input().split())
    q = deque()

    for i in range(N):
        q.append(i + 1)

    answer = []
    cnt = 0
    while q:
        p = q.popleft()
        cnt += 1
        if cnt < K:
            q.append(p)
        else:
            answer.append(str(p))
            cnt = 0
    return f'<{", ".join(answer)}>'


print(solution())
