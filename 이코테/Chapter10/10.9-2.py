from collections import deque
import copy


def solution():
    n = int(input())  # 강의 수

    indegree = [0] * (n + 1)  # 진입차수 초기화
    lecture_time = [0] * (n + 1)  # 강의별 걸리는 시간 초기화

    # 간선 정보를 담기 위한 그래프
    graph = [[] for _ in range(n + 1)]

    for i in range(1, n + 1):
        lecture_info = list(map(int, input().split()))
        lecture_time[i] = lecture_info[0]  # 강의 시간 저장

        for j in lecture_info[1:-1]:
            graph[j].append(i)
            indegree[i] += 1

    def topology_sort():
        result = copy.deepcopy(lecture_time)
        q = deque()

        for i in range(1, n + 1):
            if indegree[i] == 0:
                q.append(i)

        while q:
            now = q.popleft()

            for i in graph[now]:
                # 각 강의에 대한 인접 강의를 확인할 때, 인접한 강의에 대하여 현재보다 강의 시간이 더 긴ㄱ ㅕㅇ우를 찾느다.
                # 더 오랜 시간이 걸리는 경우의 시간 값을 저장하는 방식으로 result 테이블을 갱신한다.
                result[i] = max(result[i], result[now] + lecture_time[i])
                indegree[i] -= 1
                if indegree[i] == 0:
                    q.append(i)
        print(result)

    topology_sort()

    return


solution()
