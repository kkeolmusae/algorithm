def solution(cards1, cards2, goal):
    i = 0
    j = 0
    for k in range(len(goal)):
        if len(cards1) > i and goal[k] == cards1[i]:
            i += 1
        elif len(cards2) > j and goal[k] == cards2[j]:
            j += 1
        else:
            return "No"
    return "Yes"