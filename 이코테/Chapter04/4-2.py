def solution():
    n = int(input())
    three = "3"

    h, m, s = 0, 0, 0
    cnt = 0

    while h <= n:
        if three in str(s) or three in str(m) or three in str(h):
            cnt += 1

        s += 1

        if s == 60:
            m += 1
            s = 0

        if m == 60:
            h += 1
            m = 0
    return cnt


print(solution())
