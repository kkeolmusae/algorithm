def solution():
    # n: 볼링공의 개수, m: 공의 최대 무게
    n, m = map(int, input().split())
    data = list(map(int, input().split()))

    array = [0] * 11

    for x in data:
        # 각 무게에 해당하는 볼링공의 개수 카운트
        array[x] += 1

    result = 0
    for i in range(1, m + 1):
        # array[i] = A 가 선택할 수 있는 개수
        n -= array[i]  # 무게가 i인 볼링공의 개수 (A가 선택할 수 있는 개수) 제외
        result += array[i] * n  # B가 선택하는 경우의 수와 곱하기

    print(result)


print(solution())
