def solution(numbers, target):
    global answer
    answer = 0

    def dfs(i, total):
        global answer
        if i == len(numbers):
            if target == total:
                answer += 1
            return

        dfs(i + 1, total + numbers[i])
        dfs(i + 1, total - numbers[i])

    dfs(0, 0)
    return answer