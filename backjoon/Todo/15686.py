from itertools import combinations, permutations


def solution():
    N, M = map(int, input().split())  # N: 크기, M: 폐업안시킬 치킨집수

    chicken = []
    house = []
    for i in range(N):
        line = list(map(int, input().split()))
        for j in range(N):
            if line[j] == 0:
                continue
            elif line[j] == 1:
                house.append((i + 1, j + 1))
            else:
                chicken.append((i + 1, j + 1))

    selected_chicken = list(combinations(chicken, M))

    result = 10000000000

    for chicken_case in selected_chicken:
        result_per_chicken_case = 0
        for h in house:  # 집별로
            min_result = 1000000
            for c in chicken_case:  # 치킨집별로
                distance = abs(h[0] - c[0]) + abs(h[1] - c[1])
                min_result = min(distance, min_result)
            result_per_chicken_case += min_result
        result = min(result_per_chicken_case, result)

    return result


print(solution())
