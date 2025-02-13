# 풀이
- Difficulty:  Lv3
- Topic:  탐욕법(Greedy)
- Elapsed Time:  20m
- Status:  O 
- Memo: 최소 비용의 신장 트리를 구하는 알고리즘인 크루스칼 알고리즘을 사용해서 풀었다. 익숙하지 않아서 그런지 시간이 오래 걸렸다. 익숙해지면 금방 풀듯하다

## 내 풀이
```py
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
    costs.sort(key=lambda x: x[2])  # 비용을 기준으로 오름차순 정렬 (거리가 최소인것부터 처리)
    parent = [i for i in range(n)]
    total_cost = 0

    for cost in costs:
        island_a, island_b, bridge_cost = cost

        # a 랑 b랑 부모가 같지않으면 (이어져있지 않으면)
        if find_parent(parent, island_a) != find_parent(parent, island_b):
            union_parent(parent, island_a, island_b) # 연결
            total_cost += bridge_cost # 거리 추가

    return total_cost
```