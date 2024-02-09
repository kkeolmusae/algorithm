from collections import Counter


def solution(X, Y):
    answer = ""

    x_cnt = Counter(X)
    y_cnt = Counter(Y)

    for i in range(9, -1, -1):
        answer += str(i) * min(x_cnt[str(i)], y_cnt[str(i)])

    if len(answer) == 0:
        return "-1"

    if answer[0] == "0":
        return "0"

    return answer