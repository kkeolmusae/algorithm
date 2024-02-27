def solution():
    s = input()

    one_count = 0
    zero_count = 0
    tmp = "-1"
    for num in s:
        if num != tmp:
            if num == "1":
                tmp = "1"
                one_count += 1
            else:
                tmp = "0"
                zero_count += 1
    return min(one_count, zero_count)


print(solution())
