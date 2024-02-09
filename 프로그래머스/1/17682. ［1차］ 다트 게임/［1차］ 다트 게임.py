def solution(dartResult):
    answer = 0
    arr = [0] * 5
    idx = 0
    index = 0

    while index < len(dartResult):
        s = dartResult[index]
        if s.isdecimal():  # 숫자면
            if dartResult[index + 1].isdecimal():
                idx += 1
                arr[idx] = int(s + dartResult[index + 1])
                index += 2
            else:
                idx += 1
                arr[idx] = int(s)
                index += 1
        elif s in ["D", "T", "S"]:
            index += 1
            if s == "D":
                arr[idx] = arr[idx] ** 2
            elif s == "T":
                arr[idx] = arr[idx] ** 3
        elif s in ["*", "#"]:
            index += 1
            if s == "*":
                arr[idx] *= 2
                arr[idx - 1] *= 2
            else:
                arr[idx] *= -1

    answer = sum(arr)
    return answer


# solution("1D2S#10S")  # 5 (1 + )
