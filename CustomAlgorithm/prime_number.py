import math


# 소수 판별 함수
def is_prime_number(number):
    # 2부터 입력받은 숫자의 제곱근까지의 수를 확인해서
    for i in range(2, int(math.sqrt(number)) + 1):
        # x 가 해당 수로 나누어 떨어지면
        if number % i == 0:
            return False # 소수가 아님
        return True # 소수임

print(is_prime_number(6))