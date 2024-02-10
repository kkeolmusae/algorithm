def solution():
    n = int(input())

    i = 1
    cnt = 0
    while n >= 0:
        n -= i
        i += 1
        cnt += 1
    return cnt - 1


print(solution())
