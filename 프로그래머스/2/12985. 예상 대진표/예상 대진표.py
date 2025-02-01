import math


def solution(n, a, b):
    if a > b:  # b가 큰 수가 되게
        a, b = b, a
    answer = 0

    while abs(a - b) != 1 or b % 2 != 0:
        a = math.ceil(a / 2)
        b = math.ceil(b / 2)
        answer += 1

    return answer + 1