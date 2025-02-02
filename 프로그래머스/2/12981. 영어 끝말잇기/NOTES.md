# 풀이
- Difficulty:  Lv2
- Topic:  Summer/Winter Coding(~2018)
- Elapsed Time:  8m
- Status:  O
- Memo:  딱히 어렵지 않았다. 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지 리턴하는 부분에서만 조금 헷갈렸다.

## 내 풀이
```py
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

```