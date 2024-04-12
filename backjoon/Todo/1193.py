def solution():
    n = int(input())
    line = 1
    while n > line:
        n -= line
        line += 1

    a = 0
    b = 0
    if line % 2 == 0:  # 짝수 줄에 있으면 1/n 부터 시작
        a = n
        b = line - n + 1
    else:
        a = line - n + 1
        b = n
    return f"{a}/{b}"


print(solution())
