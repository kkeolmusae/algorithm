from collections import deque


def solution(n, computers):
    answer = 0
    graph = [False] * n

    for comIdx in range(n):
        if graph[comIdx]:
            continue

        q = deque()
        q.append(comIdx)
        graph[comIdx] = True

        while q:
            idx = q.popleft()
            for nIdx in range(n):
                isConnect = computers[idx][nIdx]

                if isConnect and not graph[nIdx]:
                    graph[nIdx] = True
                    q.append(nIdx)
        answer += 1

    return answer