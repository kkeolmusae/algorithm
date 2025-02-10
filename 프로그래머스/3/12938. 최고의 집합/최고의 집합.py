def solution(n, s):
    if n > s:
        return [-1]

    quotient = s // n  # 몫
    remainder = s % n  # 나머지

    # 몫으로 채우고, 나머지 만큼을 +1 해주기
    answer = [quotient] * (n - remainder) + [quotient + 1] * remainder
    return answer