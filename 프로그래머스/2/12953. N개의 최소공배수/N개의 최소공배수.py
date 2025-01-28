import math

def lcm(a, b):
    return a * b / math.gcd(a, b)

def solution(n):

    result = n[0]
    for i in range(1, len(n)):
        result = int(lcm(result, n[i]))

    return result