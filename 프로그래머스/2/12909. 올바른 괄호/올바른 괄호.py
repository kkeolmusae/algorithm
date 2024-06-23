from collections import deque


def solution(s):
    q = deque()
    
    for st in s:
        if st == ")":
            if len(q) == 0:
                return False
            prev = q.pop()
            if prev != "(":
                return False
        else:
            q.append(st)
    
    if len(q) > 0:
        return False

    return True