# n: 벽, m: 룰러길이, 다시 칠해야하는 구역의 번호
def solution(n, m, section):
    answer = 0
    
    s = 0
    e = 0
    for wall_num in section:
        if (not (s <= wall_num and wall_num <= e)):
            s = 0
            e = 0
            answer +=1
            s = wall_num
            e = wall_num + m - 1
            
            
    return answer