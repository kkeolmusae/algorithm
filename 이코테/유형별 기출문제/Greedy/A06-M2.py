import heapq


def solution(food_times, k):
    if sum(food_times) <= k:
        return -1

    q = []
    # (음식먹는데 걸리는 시간, 음식 순서) 로 heapq에 넣음
    for i in range(len(food_times)):
        heapq.heappush(q, (food_times[i], i + 1))

    sum_time_to_eat = 0  # 음식을 먹는데 걸린 총 시간
    remaining_food_count = len(food_times)  # 남은 음식의 개수
    prev = 0  # 이전 음식을 먹는데 걸린 시간
    # (다음 음식을 먹는데 걸리는 시간을 계산할때 이전 음식을 먹을때 걸린 시간만큼 빼줘야함)

    while True:
        current_food_time = q[0][0]
        time_to_eat = (current_food_time - prev) * remaining_food_count
        if sum_time_to_eat + time_to_eat > k:
            break
        heapq.heappop(q)
        sum_time_to_eat += time_to_eat
        remaining_food_count -= 1
        prev = current_food_time

    q.sort(key=lambda x: x[1])  # 남은 음식들 idx 순서대로 정렬

    # 다음 차례에 먹을 음식 => (k - sum_time_to_eat) % remaining_food_count
    return q[(k - sum_time_to_eat) % remaining_food_count][1]


print(solution([3, 1, 2], 5))
