# k: 최상품의 사과 점수, m: 한 박스에 들어가는 사과의 수, score: 사과들의 점수 배열
def solution(k, m, score):
    score.sort(reverse=True)
    
    answer = 0
    idx = 0
    while True:
        if (idx + m > len(score)):
            break
        tmp = score[idx: idx+m]
        answer += tmp[m-1] * m
        idx += m
    
    return answer