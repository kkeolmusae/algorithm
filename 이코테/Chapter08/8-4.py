def solution(n):
    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1
    constant = 1234567

    for i in range(2, n + 1):
        dp[i] = (dp[i - 1] + dp[i - 2]) % constant
    return dp[i]
