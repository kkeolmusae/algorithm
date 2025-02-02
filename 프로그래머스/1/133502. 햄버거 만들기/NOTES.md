# 풀이
- Difficulty:  Lv1
- Topic:  연습문제
- Elapsed Time:  5m
- Status:  O 
- Memo: 스택을 써서 금방 풀었다.

## 내 풀이
```py
def solution(ingredient):
    stack = []

    answer = 0
    for i in ingredient:
        stack.append(i)

        if len(stack) > 3 and stack[-4:] == [1, 2, 3, 1]:
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
            answer += 1

    return answer
```
