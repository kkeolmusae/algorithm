def solution(A, B):
    A.sort(reverse=True)
    B.sort(reverse=True)

    answer = 0
    i = 0
    left = 0  # 가장 큰애
    right = len(B) - 1  # 가장 작은애

    while left <= right:
        if A[i] >= B[left]:  # 가장 큰애끼리 붙는데 B가 지거나 비기는 경우 => 작은애 사용
            right -= 1
        else:
            left += 1
            answer += 1
        i += 1

    return answer