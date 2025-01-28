def solution(n):
    if n < 3:
        return 1

    tmp = [i for i in range(n)]
    
    left = 1
    right =2
    answer = 1
    sum = tmp[left] + tmp[right]
    while left < right:
        if sum < n:
            right += 1
            sum += tmp[right]
            continue
        if sum == n:
            answer += 1
        sum -= tmp[left]
        left += 1
        
    
    return answer