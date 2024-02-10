def solution():
    n = int(input())
    rope = []
    for _ in range(n):
        rope.append(int(input()))

    rope.sort()

    min_weight = 0
    for i in rope:
        min_weight = max(min_weight, i * n)
        n -= 1

    return min_weight


print(solution())
