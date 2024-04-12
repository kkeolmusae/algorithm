"""
입력
첫째 줄에 자연수 N, K가 공백을 기준으로 구분되어 주어진다. (1 ≤ N ≤ 200, 1 ≤ K ≤ 1,000) 
둘째 줄부터 N개의 줄에 걸쳐서 시험관의 정보가 주어진다. 
각 행은 N개의 원소로 구성되며, 해당 위치에 존재하는 바이러스의 번호가 공백을 기준으로 구분되어 주어진다. 
단, 해당 위치에 바이러스가 존재하지 않는 경우 0이 주어진다. 
또한 모든 바이러스의 번호는 K이하의 자연수로만 주어진다. 
N+2번째 줄에는 S, X, Y가 공백을 기준으로 구분되어 주어진다. (0 ≤ S ≤ 10,000, 1 ≤ X, Y ≤ N)

출력
S초 뒤에 (X,Y)에 존재하는 바이러스의 종류를 출력한다.
만약 S초 뒤에 해당 위치에 바이러스가 존재하지 않는다면, 0을 출력한다.
"""


def solution():
    n, k = map(int, input().split())

    graph = []
    for _ in range(n):
        graph.append(list(map(int, input().split())))

    pending_virus = [[] for _ in range(k + 1)]
    for i in range(n):
        for j in range(n):
            if graph[i][j] != 0:
                pending_virus[graph[i][j]].append((i, j))

    s, x, y = map(int, input().split())

    # 4가지 이동 방향에 대한 리스트
    # 북, 동, 남, 서
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    def bfs(time):
        virus_turn = 1
        while time > 0:
            if virus_turn == k + 1:
                time -= 1
                virus_turn = 1
                continue

            if len(pending_virus[virus_turn]) == 0:
                virus_turn += 1
                continue

            temp = []
            while len(pending_virus[virus_turn]):
                vx, vy = pending_virus[virus_turn].pop(0)

                for idx in range(4):
                    nx = vx + dx[idx]
                    ny = vy + dy[idx]

                    if nx >= 0 and nx < n and ny >= 0 and ny < n:
                        if graph[nx][ny] == 0:
                            graph[nx][ny] = virus_turn
                            temp.append((nx, ny))
            pending_virus[virus_turn] = temp

            # 다음 바이러스 차례
            virus_turn += 1

    bfs(s)
    return graph[x - 1][y - 1]


print(solution())
