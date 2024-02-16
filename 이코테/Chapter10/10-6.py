from collections import deque

# 위상 정렬


def solution():
    # n: 노드 개수, e: 간선 개수
    v, e = map(int, input().split())

    # 진입차수 초기화
    indegree = [0] * (v + 1)

    # 각 노드에 연결된 간선 정보를 저장하기 위한 그래프 초기화
    graph = [[] for _ in range(v + 1)]

    for _ in range(e):
        a, b = map(int, input().split())
        graph[a].append(b)  # a 노드에 연결된 b
        indegree[b] += 1  # b노드의 진입차수 증가

    def topology_sort():
        result = []  # 결과를 담을 배열
        q = deque()

        # 진입차수가 0인 애들 불러서 queue에 넣음
        for i in range(1, v + 1):
            if indegree[i] == 0:
                q.append(i)

        while q:
            # q에서 진입차수가 0인 노드 빼서
            now = q.popleft()
            result.append(now)

            # 해당 노드와 관련된 노드들 진입차수 뺴줌
            for i in graph[now]:
                indegree[i] -= 1
                if indegree[i] == 0:
                    q.append(i)

        for i in result:
            print(i, end=" ")

    topology_sort()


solution()
