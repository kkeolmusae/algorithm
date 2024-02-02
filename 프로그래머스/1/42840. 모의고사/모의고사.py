def solution(answers):
    p1 = [1, 2, 3, 4, 5]
    p2 = [2, 1, 2, 3, 2, 4, 2, 5]
    p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    scores = [0, 0, 0]

    for idx in range(len(answers)):
        if p1[idx % len(p1)] == answers[idx]:
            scores[0] += 1
        if p2[idx % len(p2)] == answers[idx]:
            scores[1] += 1
        if p3[idx % len(p3)] == answers[idx]:
            scores[2] += 1
    max_score = max(scores)

    answer = []
    for idx in range(len(scores)):
        if max_score == scores[idx]:
            answer.append(idx + 1)
    return answer