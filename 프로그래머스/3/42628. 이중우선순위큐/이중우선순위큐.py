import heapq


def solution(operations):
    min_heap = []
    max_heap = []
    
    for op in operations:
        cmd, num = op.split()
        
        if cmd == "I":
            heapq.heappush(min_heap, int(num))
            heapq.heappush(max_heap, -int(num))
        elif min_heap:
            if num == "-1": # 최소값 삭제
                min_value = heapq.heappop(min_heap)
                max_heap.remove(-min_value)
            else:
                max_value = heapq.heappop(max_heap)
                min_heap.remove(-max_value)
    if not min_heap:
        return [0, 0]
    
    return [-max_heap[0], min_heap[0]]