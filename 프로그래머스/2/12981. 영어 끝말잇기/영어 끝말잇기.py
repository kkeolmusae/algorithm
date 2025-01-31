import math


def solution(n, words):
    word_set = set([words[0]])
    n_idx = 2  # 몇번째 플레이어인지 (1부터 시작)
    prev = words[0][-1]
    
    for i in range(1, len(words)):
        word = words[i]
        # 첫 글자가 이전 단어의 마지막 글자와 다르거나, 단어가 이미 등장했거나, 길이가 2보다 작은 경우
        if word[0] != prev or word in word_set:
            return [n_idx % n if n_idx % n > 0 else n, math.ceil(n_idx / n)]
        else:
            prev = word[-1]
            n_idx += 1
            word_set.add(word)

    return [0, 0]
