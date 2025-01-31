from collections import defaultdict
import heapq


def solution(k, tangerine):
    dict = defaultdict(int)
    q = []

    for tan in tangerine:
        dict[tan] += 1

    for size in dict:
        heapq.heappush(q, (-dict[size], size))

    answer = 0
    while k > 0:
        count, size = heapq.heappop(q)
        k -= -count
        answer += 1
    return answer