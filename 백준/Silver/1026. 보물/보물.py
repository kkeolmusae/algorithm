# 입력
# 첫째 줄에 N이 주어진다. 둘째 줄에는 A에 있는 N개의 수가 순서대로 주어지고,
# 셋째 줄에는 B에 있는 수가 순서대로 주어진다.
# N은 50보다 작거나 같은 자연수이고, A와 B의 각 원소는 100보다 작거나 같은 음이 아닌 정수이다.

# 출력
# 첫째 줄에 S의 최솟값을 출력한다.


def solution():
    n = int(input())
    num_a = list(map(int, input().split()))
    num_b = list(map(int, input().split()))
    num_a.sort()
    num_b.sort(reverse=True)

    answer = 0
    for idx in range(len(num_a)):
        answer += num_a[idx] * num_b[idx]

    return answer


print(solution())
