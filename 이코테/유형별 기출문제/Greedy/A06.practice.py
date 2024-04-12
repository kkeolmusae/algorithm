import heapq


def solution(food_times, k):

    # 시간안에 음식 다 먹을 수 있으면 남는음식 없음
    if sum(food_times) <= k:
        return -1

    q = []

    # (음식 먹는데 걸린 시간, 음식 순서)로 heapq에 넣음 -> 음식 먹는데 걸리는 시간 작은거 부터 처리 예정
    for idx in range(len(food_times)):
        heapq.heappush(q, (food_times[idx], idx + 1))

    prev_food_time = 0
    food_count = len(food_times)  # 총 음식의 개수
    while q:
        current_time, current_order = q[0]

        bulk_size = (current_time - prev_food_time) * food_count

        if bulk_size > k:
            break

        heapq.heappop(q)
        food_count -= 1
        prev_food_time = current_time
        k -= bulk_size

    q.sort(key=lambda x: x[1])  # order 순 정렬
    return q[k % len(q)][1]


solution([4, 2, 3], 6)
