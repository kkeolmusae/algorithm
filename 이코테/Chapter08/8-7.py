# 덮개 사이즈: 2 * 1, 1 * 2, 2 * 2
def solution():
    n = int(input())

    # i-1 개 까지의 경우 + 2*1 나무
    # i-2 개 까지의 경우 + (1*2 나무 두개 or 2*2 나무 한개)
    # => dp[i] = dp[i-1] + dp[i-2] *2
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 3

    for i in range(3, n + 1):
        dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 796796

    return dp[n]


print(solution())
