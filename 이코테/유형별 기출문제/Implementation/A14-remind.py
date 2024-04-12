from itertools import permutations


def solution(n, weak, dist):
    init_weak_size = len(weak)  # 확장전 외벽 사이즈

    # weak 사이즈를 두배로 늘려서 한 방향만 고려할 수 있게 함.
    for i in range(init_weak_size):
        weak.append(weak[i] + n)

    # 투입할 친구의 최솟값을 구하는게 문제니깐 친구수보다 크게 초기화
    answer = len(dist) + 1

    # 각 weak마다 친구를 배치할건데 이때 사용할 친구 배치 경우의 수
    friends_case = list(permutations(dist, len(dist)))

    # 친구를 배치할 weak의 시작 위치
    for start in range(init_weak_size):

        for friends in friends_case:
            count = 1  # 투입할 친구 수 (초기값 1)

            # 점검 가능한 구간 = weak[start] ~ position
            position = weak[start] + friends[count - 1]

            # w: 점검하고자 하는 외벽
            # weak의 시작위치 부터 확장전 외벽 사이즈만큼만 체크하면됨.
            for w in weak[start, start + init_weak_size]:

                # 점검할 수 있는 위치를 벗어나면 친구 추가해야함
                if position < w:
                    count += 1

                    # 친구 다 썻으면
                    if count > len(dist):
                        break
                    position = w + friends[count - 1]

            answer = min(answer, count)

    if answer > len(dist):
        return -1

    return answer


print(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]))  # 2
# print(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]))  # 1
# print(solution(200, [0, 10, 50, 80, 120, 160], [1, 10, 5, 40, 30]))  # 3
