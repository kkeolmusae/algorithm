from collections import deque
import heapq

def solution(priorities, location):
    hq = [] # 우선 순위 확인 용도
    dq = deque() # 하나씩 꺼내서 순서 확인용도
    for idx in range(len(priorities)):
        priority = priorities[idx]
        dq.append((idx, priority))
        heapq.heappush(hq, (-priority, idx))

    cnt = 1
    while len(hq):
        current_priority, _ = heapq.heappop(hq) # 우선 순위가 가장 높은 숫자가 뭔지
        
        while True:
            idx, priority = dq.popleft()
            if abs(current_priority) != priority: # 이번에 처리할꺼랑 우선 순위가 다르면
                dq.append((idx, priority)) # 뒤로 넣기
            else: # 이번에 처리할꺼랑 우선 순위가 같으면
                if idx == location: # 정답이면
                    return cnt
                break
        cnt += 1