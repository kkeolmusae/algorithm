def solution():
    n, k = map(int, input().split())

    cnt = 0
    while n >= k:  # n < k (n: 2, k: 3) 인 경우 n 을 1씩 뺴야 정답이 나옴
        if n % k != 0:
            n -= 1
            cnt += 1
        n = n // k
        cnt += 1

    while n > 1:
        n -= 1
        cnt += 1

    return cnt


print(solution())


# n이 많이 큰경우 solution() 으로는 시간초과될 가능성이 있음
# => n이 k의 배수가 되도록 한번에 빼는 방식으로 해야 함
def solution_2():
    n, k = map(int, input().split())
    cnt = 0

    while True:
        target = (n // k) * k
        cnt += n - target
        n = target

        if n < k:  # N 이 K보다 작을 때 (더 나눌수 없을 때)
            break
        cnt += 1
        n = n // k

    cnt += n - 1  # 나머지 처리
    return cnt
