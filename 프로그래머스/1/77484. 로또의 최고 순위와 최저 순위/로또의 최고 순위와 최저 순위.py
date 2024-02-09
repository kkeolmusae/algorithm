def solution(lottos, win_nums):
    answer = []
    dont_know = lottos.count(0)

    match_count = len(set(lottos) & set(win_nums))  # 당첨이 확실하게된거

    best = match_count + dont_know
    worst = match_count

    dic = {6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6}
    answer.append(dic[best])
    answer.append(dic[worst])
    return answer