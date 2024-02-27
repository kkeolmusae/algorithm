def solution():
    nums = input()

    result = 0
    for i in nums:
        num = int(i)

        if num <= 1 or result <= 1:
            result += num
        else:
            result *= num

    print(result)


solution()
