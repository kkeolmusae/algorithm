import heapq


def solution(food_times, k):
    if sum(food_times) <= k:
        return -1

    q = []
    for i in range(len(food_times)):
        heapq.heappush(q, (food_times[i], i + 1))

    prev_food_time = 0  # 이전 음식 먹는데 걸린 시간
    food_count = len(food_times)  # 남은 음식의 개수

    while True:
        # 한번에 처리하고자 하는 개수
        bulk_size = (q[0][0] - prev_food_time) * food_count

        if bulk_size > k:
            break

        current_food = heapq.heappop(q)  # [0]: time, [1]: order
        k -= bulk_size
        food_count -= 1
        prev_food_time = current_food[0]

    q.sort(key=lambda x: x[1])  # order 순 정렬
    return q[k % len(q)][1]


print(solution([3, 5, 1, 6, 5, 3], 20))
