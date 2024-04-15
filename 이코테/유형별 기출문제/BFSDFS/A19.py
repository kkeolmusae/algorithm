"""
백준 18428 감시 피하기
입력
첫째 줄에 자연수 N이 주어진다. (3 ≤ N ≤ 6) 
둘째 줄에 N개의 줄에 걸쳐서 복도의 정보가 주어진다. 
각 행에서는 N개의 원소가 공백을 기준으로 구분되어 주어진다. 
해당 위치에 학생이 있다면 S, 선생님이 있다면 T, 아무것도 존재하지 않는다면 X가 주어진다.

단, 전체 선생님의 수는 5이하의 자연수, 전체 학생의 수는 30이하의 자연수이며 
항상 빈 칸의 개수는 3개 이상으로 주어진다.

출력
첫째 줄에 정확히 3개의 장애물을 설치하여 모든 학생들을 감시로부터 피하도록 할 수 있는지의 여부를 출력한다. 
모든 학생들을 감시로부터 피하도록 할 수 있다면 "YES", 그렇지 않다면 "NO"를 출력한다.
"""

from itertools import combinations


def set_graph(graph, case):
    for c in case:
        graph[c[0]][c[1]] = "O"


def reset_graph(graph, case):
    for c in case:
        graph[c[0]][c[1]] = "X"


def dfs(graph, t_positions):
    graph_size = len(graph)
    # 북 동 남 서
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    q = []
    for teacher in t_positions:
        q.append(teacher)

    while q:
        x, y = q.pop(0)
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            while nx >= 0 and nx < graph_size and ny >= 0 and ny < graph_size:
                if graph[nx][ny] == "S":
                    return False
                if graph[nx][ny] == "O":  # 막혔으면 그 방향으로 더 전진 x
                    break
                else:
                    nx = nx + dx[i]
                    ny = ny + dy[i]

    return True


def solution():
    n = int(input())

    t_position = []
    x_position = []

    graph = [[] for _ in range(n)]
    for i in range(n):
        l = list(input().split())
        for j in range(n):
            graph[i].append(l[j])
            if l[j] == "T":
                t_position.append((i, j))
            elif l[j] == "X":
                x_position.append((i, j))

    cases = list(combinations(x_position, 3))

    for case in cases:
        set_graph(graph, case)
        result = dfs(graph, t_position)
        reset_graph(graph, case)
        if result == True:  # 한번이라도 통과하면 끝
            return "YES"

    return "NO"


print(solution())
