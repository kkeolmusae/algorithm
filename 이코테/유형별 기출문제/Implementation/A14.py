# 14. 외벽 점검
# n	weak	dist	result
# 12	[1, 5, 6, 10]	[1, 2, 3, 4]	, result = 2 =>
# 12	[1, 3, 4, 9, 10]	[3, 5, 7]	, result = 1

# 틀림
# 다 틀린건 아니고 일부 테스트케이스에서 시간초과 발생함.
from itertools import combinations, permutations
import copy


def solution(n, weak, dist):

    # n: 외벽의 길이, weak: 취약 지점의 위치가 담긴 배열, dist: 각 친구가 1시간동안 이동할 수 있는거리
    # 출발 지점부터 시계 혹은 반시계 방향으로 외벽을 따라서만 이동 가능
    weak_size = len(weak)
    dist.sort(reverse=True)  # 멀리갈 수 있는 친구 부터 쓰기 위함

    # 시계방향으로만 돌기 위해서 weak를 확장
    expanded_weak = copy.deepcopy(weak)
    for i in range(len(weak)):
        expanded_weak.append(n + weak[i])

    distance_idx = 0
    used_distance = [dist[distance_idx]]  # 일단 한명만 써보기

    while distance_idx < len(dist):
        # 어떤 친구들 쓸지 선택
        for selected_friends in list(permutations(used_distance, len(used_distance))):
            # print(f"{len(selected_friends)} 명이 처리")

            # 취약 외벽 위치 선정
            for selected_weak in list(
                combinations(expanded_weak[:weak_size], len(used_distance))
            ):
                # print("---초기화----")
                weak_set = set(weak)
                tmp_set = set(weak)
                for idx in range(len(selected_friends)):
                    w = selected_weak[idx]
                    d = selected_friends[idx]
                    position = w + d - 1
                    # print(f"{d} 만큼 이동하는 친구가 {w} ~ {position+1} 까지 처리")

                    for i in weak_set:
                        if (
                            (w <= i and i <= position + 1)
                            or (w <= i + n and i + n <= (position + 1))
                        ) and i in tmp_set:
                            tmp_set.remove(i)
                            # print(f"{i} 방문처리")

                if len(tmp_set) == 0:
                    return len(selected_friends)
        distance_idx += 1
        if distance_idx >= len(dist):
            return -1
        used_distance.append(dist[distance_idx])
    return -1


# print(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]))  # 2
# print(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]))  # 1
# print(solution(200, [0, 10, 50, 80, 120, 160], [1, 10, 5, 40, 30]))  # 3
