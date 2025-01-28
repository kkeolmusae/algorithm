def solution(n):
    q = []
    i = 0
    while i < len(n):
        if q and q[-1] == n[i]:
            q.pop()
        else:
            q.append(n[i])
        i += 1
    return 1 if not len(q) else 0