# input
# 5 8 3 (배열의 크기 N, 숫자가 더해지는 횟수 M, K번 초과할 수 없다.)
# 2 4 5 4 6
# output
# 46 (6+6+6+5+6+6+6+5 = 46)


# M 이 10000 이하인 경우
def solution():
    N, M, K = map(int, input().split())
    nums = list(map(int, input().split()))

    nums.sort()
    first = nums[N - 1]
    second = nums[N - 2]

    answer = 0
    i = 0
    for _ in range(M):
        if i == K:
            answer += second
            i = 0
        else:
            answer += first
            i += 1

    return answer


print(solution())


# M 이 큰 경우 (위의 방식으로 풀었을 때 시간초과가 날 가능성이 있음)
# 규칙을 파악해서 풀자
# (배열의 크기 N, 숫자가 더해지는 횟수 M, 최대 반복 가능 횟수 K)


def solution_2():
    N, M, K = map(int, input().split())
    nums = list(map(int, input().split()))

    nums.sort()
    first = nums[N - 1]
    second = nums[N - 2]

    count = int(M / (K + 1)) * K  # K+1: 반복되는 수열의 길이
    count += M % (K + 1)  # M이 K+1 로 나누어 떨어지지 않는 경우

    answer = 0
    answer += (count) * first  # 가장 큰 수 더하기
    answer += (M - count) * second  # 두 번쨰로 큰 수 더하기

    print(answer)
