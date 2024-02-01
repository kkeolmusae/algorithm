import heapq

def solution(k, score):
    answer = []
    arr = []
    size = 0
    
    for i in score:
        if len(arr) < k or (size > 0 and arr[0] <= i):
            heapq.heappush(arr, i)
            size += 1
        if size > k:
            heapq.heappop(arr)
            size -= 1
        tmp = arr[0]
        answer.append(tmp)
            
    return answer