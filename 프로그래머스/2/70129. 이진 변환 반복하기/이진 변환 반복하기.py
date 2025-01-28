def solution(s):
    zero_cnt = 0
    try_cnt = 0
    
    while s != "1":
        zero = 0
        for i in s:
            if i == "0":
                zero += 1
        # zero = 0 개수 
        try_cnt += 1
        zero_cnt += zero
        
        # s 길이 - zero => 변환
        s = bin(len(s) - zero)[2:]
        
    return [try_cnt, zero_cnt]