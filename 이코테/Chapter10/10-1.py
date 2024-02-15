# 서로소 집합 알고리즘


def solution():
    # 특정 원소가 속한 집합을 찾아야함
    def find_parent(parent, x):
        # 루트 노드가 아니라면, 루트 노드를 찾을때 까지 재귀적으로 호출
        if parent[x] != x:
            return find_parent(parent, parent[x])
        return x

    # 경로 압축 기법
    def find_parent_v2(parent, x):
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

    # v: 노드의 개수, e: 간선(union 연산)의 개수
    v, e = map(int, input().split())
    parent = [0] * (v + 1)  # 부모 테이블 초기화

    # 부모테이블상에서 부모를 자기 자신으로 초기화
    for i in range(1, v + 1):
        parent[i] = i

    # union 연산을 각각 수행
    for i in range(e):
        a, b = map(int, input().split())
        union_parent(parent, a, b)

    # 각 원소가 속한 집합 출력
    print("각 원소가 속한 집합: ", end="")
    for i in range(1, v + 1):
        print(find_parent(parent, i), end=" ")

    print()

    # 부모 테이블의 내용 출력
    print("부모 테이블: ", end="")
    for i in range(1, v + 1):
        print(parent[i], end=" ")


solution()
