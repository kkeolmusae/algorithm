def solution():
    n, m = map(int, input().split())

    team = [0] * (n + 1)

    # 팀 초기화
    for i in range(n + 1):
        team[i] = i

    def find_team(team, a):
        if team[a] != a:
            team[a] = find_team(team, team[a])
        return team[a]

    def union_team(team, a, b):
        a = find_team(team, a)
        b = find_team(team, b)

        if b < a:
            team[a] = b
        else:
            team[b] = a

    result = []
    for _ in range(m):
        operater, a, b = map(int, input().split())
        if operater == 0:
            union_team(team, a, b)
        else:
            if find_team(team, a) == find_team(team, b):
                result.append("YES")
            else:
                result.append("NO")
    print(*result, sep="\n")


solution()  # 18m
