def solution(sticker):
    n = len(sticker)
    if n == 1:
        return sticker[0]

    dp_a = [0] * n
    dp_b = [0] * n

    # 첫번째꺼 뜯는 경우
    dp_a[0] = sticker[0]
    dp_a[1] = max(dp_a[0], sticker[1])
    for i in range(2, n - 1):
        dp_a[i] = max(dp_a[i - 1], sticker[i] + dp_a[i - 2])

    # 첫번째꺼 안뜯는 경우
    dp_b[1] = sticker[1]
    for i in range(2, n):
        dp_b[i] = max(dp_b[i - 1], sticker[i] + dp_b[i - 2])

    return max(max(dp_a), max(dp_b))