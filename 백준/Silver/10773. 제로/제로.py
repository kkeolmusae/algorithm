def solution():
    N = int(input())

    l = []

    for _ in range(N):
        m = int(input())

        if m == 0:
            l.pop()
        else:
            l.append(m)

    return sum(l)


print(solution())
