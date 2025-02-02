# 풀이
- Difficulty:  Lv2
- Topic:  연습문제
- Elapsed Time:  10m
- Status:  O 
- Memo: 쉽게 풀었다. 

## 내 풀이
배열이 원형으로 나왔을떄 기존 배열을 두배로 늘려서 접근하는 방법을 알고 있어서 금방 해결했다.
```py
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
```
