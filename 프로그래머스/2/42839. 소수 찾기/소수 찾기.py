from itertools import permutations


def solution(numbers):
    max_num = int("".join(sorted(list(numbers), reverse=True)))
    
    arr = [True] * (max_num + 1) # 소수: True
    arr[0]=False
    arr[1]= False
    for i in range(2, int((max_num+1)**0.5) + 1):
        if arr[i] == False:
            continue
        for j in range(i+i, max_num + 1, i):
            arr[j] = False
    
    cnt = 0
    l = []
    for n in range(1, len(numbers) + 1):
        l += list(permutations(list(numbers), n))
    s = set()
    for num in l:
        n = int("".join(num))
        if arr[n] and not n in s:
            s.add(n)
            cnt += 1
    return cnt