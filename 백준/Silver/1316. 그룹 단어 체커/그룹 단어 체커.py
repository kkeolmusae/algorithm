# 그룹 단어 체커


def check_group_word(word):
    dic = {}
    prev = word[:1]
    dic[prev] = 1

    for w in word[1:]:
        if prev == w:
            dic[prev] += 1
        else:
            if w in dic:
                return False
            else:
                dic[w] = 1
                prev = w
    return True


def solution():
    n = int(input())
    cnt = 0

    for _ in range(n):
        word = input()
        result = check_group_word(word)
        if result:
            cnt += 1
    return cnt


print(solution())
