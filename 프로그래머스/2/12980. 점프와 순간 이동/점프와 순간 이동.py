def solution(n):
    ans = 1
    while n != 1:
        if n % 2 == 0:  # 나누어 떨어지면
            n /= 2
        else:
            ans += 1
            n -= 1
    return ans