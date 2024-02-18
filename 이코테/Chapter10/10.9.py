from collections import deque
import copy


def solution():
    n = int(input())  # 듣고자 하는 강의 수
    # 강의의 강의 시간과 그 강의를 위해 먼저 들어야 하는 강의들의 번호
    # 각 줄은 -1 로 끝남

    # 진입차수 초기화
    indegree = [0] * (n + 1)

    # 각 노드에 연결된 간선 정보를 담기위한 배열 초기화
    graph = [[] for _ in range(n + 1)]

    # 강의 시간
    lecture_time = [0] * (n + 1)

    # 강의 하나씩 가져옴.
    # 해당 강의 첫번째값은 강의시간, 이후 값들은 해당 강의를 듣기전에 들어야하는 선수 강의임
    for i in range(1, n + 1):
        curriculums = list(map(int, input().split()))

        # 입력받은 값의 첫번째 값은 해당 강의의 강의시간임
        lecture_time[i] = curriculums[0]

        for j in curriculums[1:-1]:  # 강의 i를 듣기전에 들어야하는 강의들을 가져와서
            indegree[i] += 1  # 해당 강의의 선수과목수만큼 증가시키고
            graph[j].append(i)  # graph에 선수과목(j)에 i 과목 넣어줌

    def topology_sort():
        result = copy.deepcopy(lecture_time)
        q = deque()

        for i in range(n + 1):
            if indegree[i] == 0:
                q.append(i)

        while q:
            now = q.popleft()

            for i in graph[now]:
                indegree[i] -= 1
                result[i] = max(result[i], result[now] + lecture_time[i])

                if indegree[i] == 0:
                    q.append(i)

        for i in range(1, n + 1):
            print(result[i])

    topology_sort()

    return


solution()
