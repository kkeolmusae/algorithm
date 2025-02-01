def solution(elements):
    answer = set()
    double_elemets = elements + elements
    n = len(elements)

    for i in range(n):
        total = elements[i]
        answer.add(total)
        for j in range(i + 1, i + n):
            total += double_elemets[j]
            answer.add(total)

    return len(answer)