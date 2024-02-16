# 크루스칼 알고리즘


def solution():
    def find_parent(parent, x):
        if parent[x] != x:
            parent[x] = find_parent(parent, parent[x])
        return parent[x]

    def union_parent(parent, a, b):
        a = find_parent(parent, a)
        b = find_parent(parent, b)

        if a < b:
            parent[b] = a
        else:
            parent[a] = b

    # v: 노드 수, e: 간선 수
    v, e = map(int, input().split())

    # parent 초기화
    parent = [0] * (v + 1)
    for i in range(1, v + 1):
        parent[i] = i

    edges = []  # 간선 정보
    result = 0  # 간선 연결비용
    for _ in range(e):
        a, b, cost = map(int, input().split())
        edges.append((cost, a, b))

    # cost를 앞에 두는 이유는 정렬을 위해서
    edges.sort()

    for edge in edges:
        cost, a, b = edge

        # 부모가 다르면 => 사이클이 발생하지 않은 경우에
        if find_parent(parent, a) != find_parent(parent, b):
            union_parent(parent, a, b)
            result += cost

    return result


print(solution())
