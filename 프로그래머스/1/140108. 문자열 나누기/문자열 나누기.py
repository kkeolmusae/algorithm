def solution(s):
    answer = 0
    
    x = ""
    x_cnt = 0
    not_x_cnt = 0
    for i in s:
        if x == "":
            x = i
        
        if i == x:
            x_cnt += 1
        else:
            not_x_cnt += 1
            
        if x_cnt == not_x_cnt:
            answer += 1
            x = ""
            x_cnt = 0
            not_x_cnt = 0
    
    if x != "":
        answer += 1
    return answer