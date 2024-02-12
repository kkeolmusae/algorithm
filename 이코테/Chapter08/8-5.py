# 5로 나누어 떨어지면 5로 나눔
# 3로 나누어 떨어지면 3로 나눔
# 2로 나누어 떨어지면 2로 나눔
# 1을 뺌
# X가 주어졌을때 연산 4개를 적절히 사용해서 1을 만들껀데
# 연산을 사용하는 횟수의 최솟값을 출력
def solution():
    n = int(input())
    dp = [0] * (n + 1)

    for i in range(2, n + 1):
        # 1을 빼는 경우
        dp[i] = dp[i - 1] + 1

        # 2로 나누어 떨어지는 경우
        # min 으로 dp[i]랑 비교하는 이유는 기존 dp[i]가 최소일 수 있어서고
        # +1 을 하는 이유는 연산 횟수를 증가시켜야하기 때문
        if i % 2 == 0:
            dp[i] = min(dp[i], dp[i // 2] + 1)

        if i % 3 == 0:
            dp[i] = min(dp[i], dp[i // 3] + 1)

        if i % 5 == 0:
            dp[i] = min(dp[i], dp[i // 5] + 1)

    return dp[n]


print(solution())
