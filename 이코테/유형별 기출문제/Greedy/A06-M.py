# 오답
# 테스트 15, 17 〉 실패 (런타임 에러)


def solution(food_times, k):

    total_food_times = sum(food_times)
    if total_food_times <= k:
        return -1

    idx = 0
    while k > 0:
        if idx == len(food_times):
            idx = 0

        if food_times[idx] != 0:
            food_times[idx] -= 1
            k -= 1
        idx += 1

    if idx == len(food_times):
        idx = 0

    while True:
        if food_times[idx] == 0:
            idx += 1
        else:
            break

    return idx + 1


print(solution([1, 1, 1], 3))
