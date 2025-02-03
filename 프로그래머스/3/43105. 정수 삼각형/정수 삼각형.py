def solution(triangle):
    answer = 0

    if len(triangle) == 1:
        return triangle[0][0]

    for i in range(1, len(triangle)):
        for j in range(len(triangle[i])):
            triangle[i][j] = triangle[i][j] + max(
                0 if j - 1 < 0 else triangle[i - 1][j - 1],
                0 if len(triangle[i - 1]) <= j else triangle[i - 1][j],
            )
            answer = max(answer, triangle[i][j])

    return answer