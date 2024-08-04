import heapq
from math import floor


def solution(jobs):
    answer = 0
    q = []
    
    cnt = 0 # 처리한 job 수
    now = 0 # 현재 시간 
    start = -1 # 시작 시간
    
    while cnt < len(jobs):
        for tick, elapsed_time in jobs:
            if start < tick and tick <= now: # 현재 처리할 수 있는 jobs업무들 다 q에 넣음
                heapq.heappush(q, (elapsed_time, tick))
                
        if q: # 지금 처리할 수 있는 업무가 있으면
            [elapsed_time, tick] = heapq.heappop(q) # 업무 처리
            cnt += 1 # 처리한 업무수 증가
            start = now # 시작시간 변경
            now += elapsed_time # 현재 시간 변경
            used_time = now - tick # job을 처리하는데 걸린 시간
            answer += used_time
        else:
            now += 1
            
    return floor(answer / len(jobs))