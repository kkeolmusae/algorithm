def solution(n):
    one_cnt = bin(n).count("1")

    while True:
        n = n + 1
        if one_cnt == bin(n).count("1"):
            return n