def solution():
    n = int(input())
    fear_level = list(map(int, input().split()))
    fear_level.sort()

    idx = 0

    cnt = 0
    while True:
        idx = idx + fear_level[idx]
        if idx >= n:
            break
        cnt += 1

    print(cnt)


solution()
