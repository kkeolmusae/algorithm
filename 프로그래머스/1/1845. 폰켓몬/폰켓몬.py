def solution(nums):
    A = set(nums)
    return min(len(A), len(nums) // 2)