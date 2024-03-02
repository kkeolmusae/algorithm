def solution():
    str = input()

    j = len(str) - 1
    i = 0

    a = 0
    b = 0
    while i < j:
        a += int(str[i])
        b += int(str[j])
        i += 1
        j -= 1

    return "LUCKY" if a == b else "READY"


print(solution())