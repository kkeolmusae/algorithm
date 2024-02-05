def solution():
    n, m = map(int, input().split())

    maxNum = 0
    for _ in range(n):
        nums = list(map(int, input().split()))
        minValue = min(nums)
        maxNum = max(minValue, maxNum)

    return maxNum


print(solution())
