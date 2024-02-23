from collections import deque


def solution():

    # v: 노드의 개수, e: 간선의 개수
    v, e = map(int, input().split())

    # 모든 노드에 대한 진입차수는 0으로 초기화 (노드별로 진입차수를 기록하기 위함)
    indegree = [0] * (v + 1)

    # 각 노드에 대한 연결된 간선 정보를 담기위한 그래프 초기화
    graph = [[] for _ in range(v + 1)]

    # 방향 그래프의 모든 간선 정보를 입력받기
    for _ in range(e):
        a, b = map(int, input().split())
        # 앞번호 노드(a)에 연결된 뒷번호 노드(b) 추가
        graph[a].append(b)
        # 뒷번호 노드(b)의 진입차수 1 증가
        indegree[b] += 1

    def topology_sort():
        result = []  # 알고리즘 수행 결과를 담을 배열
        q = deque()  # 큐 기능을 위한 deque 라이브러리

        # 진입차수가 0인 노드를 우선 큐에 넣음
        for i in range(1, v + 1):
            if indegree[i] == 0:
                q.append(i)

        while q:
            # 큐에서 원소 꺼내기
            now = q.popleft()
            result.append(now)

            # 해당 원소와 연결된 노드들의 진입차수에서 1빼기
            for i in graph[now]:
                indegree[i] -= 1

                # 새롭게 진입차수가 0이 되는 노드를 큐에 삽입
                if indegree[i] == 0:
                    q.append(i)

        for i in result:
            print(i, end=" ")

    topology_sort()


solution()
