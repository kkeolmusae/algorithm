import math


def eratosthenes(num):
    array = [True for i in range(num + 1)]

    for i in range(2, int(math.sqrt(num)) + 1):
        if array[i] == True:
            j = 2
            while i * j <= num:
                array[i * j] = False
                j += 1
    for i in range(2, num + 1):
        if array[i]:
            print(i, end=' ')

# 100 보다 작은 소수 싹다 출력
eratosthenes(100)