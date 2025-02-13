def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

def union_parent(parent, a, b):
    root_a = find_parent(parent, a)
    root_b = find_parent(parent, b)

    if root_a != root_b:
        parent[root_b] = root_a

def solution(n, costs):
    costs.sort(key=lambda x: x[2])  # 비용을 기준으로 오름차순 정렬
    parent = [i for i in range(n)]
    total_cost = 0

    for cost in costs:
        island_a, island_b, bridge_cost = cost
        if find_parent(parent, island_a) != find_parent(parent, island_b):
            union_parent(parent, island_a, island_b)
            total_cost += bridge_cost

    return total_cost