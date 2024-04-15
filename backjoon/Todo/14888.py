"""
입력
첫째 줄에 수의 개수 N(2 ≤ N ≤ 11)가 주어진다. 
둘째 줄에는 A1, A2, ..., AN이 주어진다. (1 ≤ Ai ≤ 100) 
셋째 줄에는 합이 N-1인 4개의 정수가 주어지는데, 
차례대로 덧셈(+)의 개수, 뺄셈(-)의 개수, 곱셈(×)의 개수, 나눗셈(÷)의 개수이다.

출력
첫째 줄에 만들 수 있는 식의 결과의 최댓값을, 
둘째 줄에는 최솟값을 출력한다. 
연산자를 어떻게 끼워넣어도 항상 -10억보다 크거나 같고, 
10억보다 작거나 같은 결과가 나오는 입력만 주어진다. 
또한, 앞에서부터 계산했을 때, 중간에 계산되는 식의 결과도 항상 -10억보다 크거나 같고, 
10억보다 작거나 같다.
"""

from itertools import permutations


def evaluate_expression(expression):
    # 공백 제거
    expression = expression.replace(" ", "")

    # 숫자와 연산자를 분리
    tokens = []
    num = ""
    for char in expression:
        if char.isdigit():
            num += char
        else:
            if num:
                tokens.append(int(num))
                num = ""
            tokens.append(char)
    if num:
        tokens.append(int(num))

    # 계산 수행
    result = tokens[0]
    for i in range(1, len(tokens), 2):
        operator = tokens[i]
        operand = tokens[i + 1]
        if operator == "+":
            result += operand
        elif operator == "-":
            result -= operand
        elif operator == "*":
            result *= operand
        elif operator == "/":
            if result < 0:
                result *= -1
                result //= operand
                result *= -1
            else:
                result //= operand  # 나눗셈은 조건에 따라 처리 가능

    return result


def solution():
    n = int(input())
    nums = list(map(int, input().split()))
    plus, minus, mul, div = map(int, input().split())

    operator = [0 for _ in range(plus)]
    operator += [1 for _ in range(minus)]
    operator += [2 for _ in range(mul)]
    operator += [3 for _ in range(div)]

    case = list(set(permutations(operator, len(operator))))
    max_result = -1000000000
    min_result = 1000000000

    for i in case:
        strs = ""
        for j in range(len(nums) - 1):
            strs += str(nums[j])
            if i[j] == 0:
                strs += "+"
            elif i[j] == 1:
                strs += "-"
            elif i[j] == 2:
                strs += "*"
            else:
                strs += "/"
        strs += str(nums[-1])
        result = evaluate_expression(strs)
        max_result = max(max_result, result)
        min_result = min(min_result, result)

    print(max_result)
    print(min_result)


solution()

"""
3
3 4 5
3 3 3 2 
"""
