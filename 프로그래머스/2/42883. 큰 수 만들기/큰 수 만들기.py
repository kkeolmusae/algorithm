def solution(number, k):
    stack = []

    for digit in number:
        while k > 0 and stack and stack[-1] < digit:
            stack.pop()
            k -= 1
        stack.append(digit)

    # 남은 수가 있을 경우 뒤에서부터 제거
    while k > 0:
        stack.pop()
        k -= 1

    answer = ''.join(stack)
    return answer
