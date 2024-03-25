from itertools import permutations


def solution(n, weak, dist):
    weak_size = len(weak)
    dist.sort(reverse=True)  # 거리가 긴 친구부터 배치하기 위해 내림차순 정렬

    # 취약 지점을 원형으로 탐색하기 위해 weak 배열을 확장
    expanded_weak = weak + [w + n for w in weak]

    # 모든 취약 지점을 탐색하는 함수
    def check_weak(start, friends):
        end = expanded_weak[start] + friends
        repaired = {
            weak_point for weak_point in expanded_weak if start < weak_point <= end
        }
        return repaired

    # 사용할 친구의 수를 1명부터 증가시키면서 탐색
    for friends_count in range(1, len(dist) + 1):
        # 친구들의 조합을 순열로 생성
        for selected_dist in permutations(dist, friends_count):
            # 시작 위치를 모든 취약 지점에서 시도
            for start in range(weak_size):
                repaired_weak = set()  # 현재까지 수리한 취약 지점을 저장할 집합
                # 선택된 친구들로 취약 지점을 탐색하면서 수리 가능한 취약 지점을 저장
                for friend_distance in selected_dist:
                    repaired_weak |= check_weak(start, friend_distance)
                    # 모든 취약 지점을 수리했다면 최소 친구 수 반환
                    if len(repaired_weak) == weak_size:
                        return friends_count
    # 모든 경우를 탐색한 후에도 모든 취약 지점을 수리할 수 없는 경우 -1 반환
    return -1


print(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]))  # 2
print(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]))  # 1
print(solution(200, [0, 10, 50, 80, 120, 160], [1, 10, 5, 40, 30]))  # 3
