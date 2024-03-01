def solution():
    # n: 볼링공의 개수, m: 공의 최대 무게
    n, m = map(int, input().split())
    balls = list(map(int, input().split()))

    ball_count = [0] * (m + 1)

    for i in balls:
        ball_count[i] += 1

    result = 0
    for i in range(1, m):
        count = 0
        for j in range(i + 1, m + 1):
            count += ball_count[i] * ball_count[j]
        result += count

    print(result)


print(solution())
