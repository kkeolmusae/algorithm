from math import sqrt


def solution(number, limit, power):
    yaksu_list = [0] * (number + 1)
    for idx in range(number + 1):
        yaksuCount = len(divisor(idx))
        yaksu_list[idx] = yaksuCount if limit >= yaksuCount else power
        # yaksu_list[idx] = yaksuCount

    return sum(yaksu_list)


def divisor(number):
    result = []
    for i in range(1, int(sqrt(number)) + 1):
        if number % i == 0:
            result.append(i)
            if i < number // i:
                result.append(number // i)
    return result

