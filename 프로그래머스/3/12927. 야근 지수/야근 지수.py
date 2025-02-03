import heapq


def solution(n, works):
    answer = 0

    q = [-w for w in works]

    heapq.heapify(q)

    while n:
        if not q:
            break
        work = -heapq.heappop(q)
        work -= 1
        if work > 0:
            heapq.heappush(q, -work)
        n -= 1

    while q:
        work = -heapq.heappop(q)
        answer += work**2

    return answer