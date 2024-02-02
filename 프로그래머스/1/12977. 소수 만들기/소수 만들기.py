import itertools
import math


def solution(nums):
    nums.sort(reverse=True)
    maxSum = sum(nums[0:3])
    sosu_array = eratosthenes(maxSum)
    list = itertools.combinations(nums, 3)  # 3개씩 조합

    answer = 0
    for i in list:
        if sosu_array[sum(i)]:
            answer += 1

    return answer


def eratosthenes(num):
    array = [True for i in range(num + 1)]

    for i in range(2, int(math.sqrt(num)) + 1):
        if array[i] == True:
            j = 2
            while i * j <= num:
                array[i * j] = False
                j += 1
    return array