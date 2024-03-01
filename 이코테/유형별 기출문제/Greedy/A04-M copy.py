def solution():
    n = int(input())
    coins = list(map(int, input().split()))

    coins.sort()

    target = 1
    for c in coins:  # 화폐 단위를 하나씩 꺼냄
        # target 보다 큰 화폐 단위면 만들 수 없다는 원리? 를 이용

        # 만들 수 없는 금액을 찾았을 때 반복 종료
        if c > target:
            break
        target += c  # target + c 를 해서 다음에 확인할 금액을 갱신.
        # (target + c - 1)의 금액은 만들 수 있음
    return target


print(solution())
