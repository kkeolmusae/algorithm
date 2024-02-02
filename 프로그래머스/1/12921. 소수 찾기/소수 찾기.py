import math


def solution(n):
    arr = eratosthenes(n)
    
    cnt = 0
    for i in arr[2:]:
        if i == True:
            cnt += 1
    return cnt

def eratosthenes(num):
    array = [True for i in range(num + 1)]

    for i in range(2, int(math.sqrt(num)) + 1):
        if array[i] == True:
            j = 2
            while i * j <= num:
                array[i * j] = False
                j += 1
    return array