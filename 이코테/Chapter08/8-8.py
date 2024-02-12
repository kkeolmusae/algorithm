def solution():
    # n: 화폐의 가치 종류, m: 만들고자 하는 화폐
    max_num = 10001
    n, m = map(int, input().split())
    dp = [max_num] * (m + 1)
    money = []
    for _ in range(n):
        money.append(int(input()))

    dp[0] = 0

    # 화폐 종류를 하나씩 꺼내서
    for i in money:
        # 화폐단위보다 작은건 할 필요없음
        for j in range(i, m + 1):
            # (확인할 value - 현재 화폐종류)가 만들 수 있는 화폐면
            if dp[j - i] != max_num:
                dp[j] = min(dp[j], dp[j - i] + 1)
    if dp[m] == max_num:
        return -1
    return dp[m]


print(solution())

# 2, 3 화폐  +  15원 만들기
# dp[?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?]
# dp[?, ?, 2, ?, 2, ?, 2, ?, ?, ?, ?, ?, ?, ?, ?]
