def solution():
    alphabet = []
    nums = 0

    s = input()

    for i in s:
        if i.isdigit():
            nums += int(i)
        else:
            alphabet.append(i)

    alphabet.sort()

    return "".join(alphabet) + str(nums)


print(solution())
