from collections import defaultdict


def solution(s, skip, index):
    skip_set = set()

    for a in skip:
        skip_set.add(a)

    alpha_arr = []
    alpha_idx = defaultdict(int)
    a_ascii = 97
    z_ascii = 122
    idx = 0
    for alpha_ascii in range(a_ascii, z_ascii + 1):
        alpha = chr(alpha_ascii)
        if alpha in skip_set:
            continue
        alpha_arr.append(alpha)
        alpha_idx[alpha] = idx
        idx += 1

    answer = ""
    alpha_length = len(alpha_idx)
    for st in s:
        next = (alpha_idx[st] + index) % alpha_length
        while next > alpha_length:
            next %= alpha_length
        answer += alpha_arr[next]

    return answer