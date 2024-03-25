# 14. 외벽 점검
# n	weak	dist	result
# 12	[1, 5, 6, 10]	[1, 2, 3, 4]	, result = 2 =>
# 12	[1, 3, 4, 9, 10]	[3, 5, 7]	, result = 1


def solution(n, weak, dist):
    # 길이를 두배로 늘려서 한방향만 고려할 수 있게 함.
    length = len(weak)
    for i in range(length):
        weak.append(weak[i] + n)

    # 투압할 친구 수의 최솟값을 찾아야하므로 len(dist) + 1 로 초기화
    answer = len(dist) + 1
    dist.sort(reverse=True)

    # 0 부터 length - 1 까지의 위치를 각각 시작점으로 설정
    for start in range(length):
        # 친구를 나열하는 모든 경우의 수 각각에 대하여 확인
        count = 1  # 투입할 친구의 수
        for friends in dist[:count]:
            # 해당 친구가 점검할 수 있는 마지막 위치
            position = weak[start] + friends

            # 시작점 부터 모든 취약 지점을 확인
            for index in range(start, start + length):
                # 점검할 수 있는 위치를 벗어나는 경우
                if position < weak[index]:
                    count += 1  # 새 친구 추가
                    if count > len(dist):  # 더 투입 못하면 끝
                        break
                    position = weak[index] + friends
            answer = min(answer, count)

    if answer > len(dist):
        return -1
    return answer


print(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]))  # 2
print(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]))  # 1
print(solution(200, [0, 10, 50, 80, 120, 160], [1, 10, 5, 40, 30]))  # 3
print(solution(50, [1], [6]))  # 1
