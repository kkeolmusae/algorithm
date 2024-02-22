def solution(participant, completion):
    answer = ""
    dic = {i: 0 for i in participant}

    for p in participant:
        dic[p] += 1

    for c in completion:
        dic[c] -= 1

    for i in dic:
        if dic[i] == 1:
            return i