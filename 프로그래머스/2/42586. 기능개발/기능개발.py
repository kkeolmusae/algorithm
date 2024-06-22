import math

def solution(progresses, speeds):
    answer = []
    date = 0.9
    for idx in range(len(progresses)):
        elapsed_date = math.ceil((100 - progresses[idx]) / speeds[idx])
        if elapsed_date > date:
            answer.append(1)
            date = elapsed_date
        elif elapsed_date <= date:
            answer[len(answer) - 1] += 1
    return answer