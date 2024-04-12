# 셀프 넘버
def get_self(num):
    nums = list(map(int, list(str(num))))
    return num + sum(nums)


def solution():
    nums = [False] * 20000
    num = 1
    while True:
        result = get_self(num)
        if num >= 10000:
            break
        nums[result] = True
        num += 1

    for i in range(1, 10000):
        if nums[i] is False:
            print(i)


solution()
