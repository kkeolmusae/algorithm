# input
# 1260
# output
# 6


def solution():
    N = input()
    changes = [500, 100, 50, 10]
    answer = 0

    for coin in changes:
        answer += N // coin
        N %= coin

    return answer


print(solution())
