from math import sqrt


def divisor(number):
    result = []
    for i in range(1, int(sqrt(number)) + 1):
        if number % i == 0:
            result.append(i)
            if i < number // i:
                result.append(number // i)
    return result
