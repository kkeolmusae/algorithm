def solution():
    # n: 집의 개수, m: 길의 개수
    n, m = map(int, input().split())

    road_info = []
    house = [0] * (n + 1)

    for i in range(n + 1):
        house[i] = i

    for _ in range(m):
        a, b, cost = map(int, input().split())
        road_info.append((cost, a, b))

    road_info.sort()

    def find_house(house, a):
        if house[a] != a:
            house[a] = find_house(house, house[a])
        return house[a]

    def connect_road(house, a, b):
        a = find_house(house, a)
        b = find_house(house, b)

        if a < b:
            house[b] = a
        else:
            house[a] = b

    total_cost = 0
    connected_road = 0
    for road in road_info:

        # 최소한의 길(집 개수 -1) 만큼 이었으면 더 안이어도 됨
        if connected_road == n - 2:
            break

        cost, a, b = road

        if find_house(house, a) != find_house(house, b):
            connect_road(house, a, b)
            total_cost += cost
            connected_road += 1

    print(total_cost)


solution()  # 26m
