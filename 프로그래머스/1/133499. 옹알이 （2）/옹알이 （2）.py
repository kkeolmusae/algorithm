def solution(babbling):
    words = ["aya", "ye", "woo", "ma"]
    answer = 0

    for word in babbling:
        if word in words:
            answer += 1
            continue

        prev = ""
        curr = ""
        is_pass = False

        for char in word:
            curr += char
            
            if prev == curr: # 같은 발음이 두번 연속인 경우 발음 불가한 케이스라 종료
                break

            if curr in words:  # 발음 가능한 단어를 완성했으면
                prev = curr
                curr = ""

        if curr == "":
            answer += 1

    return answer