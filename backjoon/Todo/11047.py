def solution():
    N, K = map(int, input().split())
    arr = []
    answer = 0
    for _ in range(N):
        arr.append(int(input()))

    arr.sort(reverse=True)
    for i in arr:
        cnt = K // i
        answer += cnt
        K -= cnt * i
    return answer


print(solution())
