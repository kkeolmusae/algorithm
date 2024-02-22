import string


def solution(keymap, targets):
    dic = {}

    for i in string.ascii_uppercase:
        dic[i] = int(1e9)
    for km in keymap:
        for i in range(len(km)):
            key = km[i]
            dic[key] = min(i + 1, dic[key])

    answer = []
    for tg in targets:
        count = 0
        for t in range(len(tg)):
            key = tg[t]
            if dic[key] != int(1e9):
                count += dic[key]
            else:
                count = -1
                break
        answer.append(count)
    return answer