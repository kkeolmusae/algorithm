# 14. 외벽 점검
# n	weak	dist	result
# 12	[1, 5, 6, 10]	[1, 2, 3, 4]	, result = 2 =>
# 12	[1, 3, 4, 9, 10]	[3, 5, 7]	, result = 1
from itertools import permutations


def solution(n, weak, dist):
    # 길이를 두배로 늘려서 한방향만 고려할 수 있게 함.
    init_weak_size = len(weak)
    for i in range(init_weak_size):
        weak.append(weak[i] + n)

    # 투입할 친구 수의 최솟값을 찾아야하므로 len(dist) + 1 로 초기화
    answer = len(dist) + 1

    # 친구를 나열하는 모든 경우의 수
    friends_case = list(permutations(dist, len(dist)))

    # 0 부터 length - 1 까지의 위치를 각각 시작점으로 설정
    for start in range(init_weak_size):  # 취약점의 위치를 순서대로 체크

        # 친구를 나열하는 모든 경우의 수 각각에 대하여 확인
        for friends in friends_case:
            count = 1  # 투입할 친구의 수

            # 해당 친구가 점검할 수 있는 마지막 위치
            position = weak[start] + friends[count - 1]

            # 시작점 부터 모든 취약 지점을 확인
            for w in weak[start, start + init_weak_size]:
                # 점검할 수 있는 위치를 벗어나는 경우
                if position < w:
                    count += 1  # 새 친구 추가

                    if count > len(dist):  # 더 투입 못하면 끝
                        break
                    position = w + friends[count - 1]

            answer = min(answer, count)

    if answer > len(dist):
        return -1
    return answer
