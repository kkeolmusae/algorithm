import heapq

def solution(scoville, K):
    q = []
    for s in scoville:
        heapq.heappush(q, s)
        
    answer = 0
    while True:
        min_scoville = heapq.heappop(q) 
        if min_scoville >= K:
            return answer
        
        # 더이상 섞을 음식이 없으면
        if len(q) == 0: 
            return -1
        
        second_min_scoville = heapq.heappop(q)
        new_scoville = min_scoville + (second_min_scoville * 2)
        heapq.heappush(q, new_scoville)
        answer += 1