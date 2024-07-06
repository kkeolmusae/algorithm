def compress(s, unit):
    prev = s[:unit]  # 시작 문자열 설정
    count = 1
    compressed_s = ""

    for i in range(unit, len(s), unit):
        curr = s[i : i + unit]

        if prev == curr:
            count += 1
        else:
            if count > 1:
                compressed_s += str(count)
            compressed_s += prev
            prev = curr
            count = 1
    if count > 1:
        compressed_s += str(count)
    compressed_s += prev

    return len(compressed_s)


def solution(s):
    result = len(s)
    for i in range(1, len(s) // 2 + 1):
        compress_s_size = compress(s, i)
        result = min(compress_s_size, result)

    return result


st = "abcabcabcabcdededededede"
print(solution(st))
