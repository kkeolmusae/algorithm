def solution():
    n = int(input())
    storage = list(map(int, input().split()))

    dp = [0] * n
    dp[0] = storage[0]
    dp[1] = max(storage[0], storage[1])

    for i in range(1, n):
        dp[i] = max(dp[i - 1], dp[i - 2] + storage[i])

    return dp[n - 1]


print(solution())
