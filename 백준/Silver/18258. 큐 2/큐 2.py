from collections import deque
from sys import stdin


def solution():
    n = int(stdin.readline())
    q = deque()
    result = []

    for _ in range(n):
        command = stdin.readline().split()
        cmd = command[0]
        
        if cmd == "push":
            q.append(int(command[1]))
        elif cmd == "front":
            result.append(q[0] if q else -1)
        elif cmd == "back":
            result.append(q[-1] if q else -1)
        elif cmd == "size":
            result.append(len(q))
        elif cmd == "pop":
            result.append(q.popleft() if q else -1)
        elif cmd == "empty":
            result.append(0 if q else 1)
    print(*result, sep='\n')

solution()