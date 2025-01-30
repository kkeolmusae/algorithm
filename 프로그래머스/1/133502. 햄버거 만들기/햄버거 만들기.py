def solution(ingredient):
    stack = []

    answer = 0
    for i in ingredient:
        stack.append(i)

        if len(stack) > 3 and stack[-4:] == [1, 2, 3, 1]:
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
            answer += 1

    return answer