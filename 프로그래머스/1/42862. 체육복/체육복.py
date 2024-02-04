def solution(n, lost, reserve):
    lost_set = set(lost) 
    reserve_set = set(reserve)
    reserve_and_lost = lost_set & reserve_set

    lost_set -= reserve_and_lost
    reserve_set -= reserve_and_lost

    for i in reserve_set:
        if i - 1 in lost_set: # 앞번호가 잃어버렸으면
            lost_set -= {i - 1, } # 앞번호 빌려줌
        elif i + 1 in lost_set: # 뒷번호가 잃어버렸으면
            lost_set -= {i + 1, } # 뒷번호 빌려줌
            
    return n - len(lost_set)    