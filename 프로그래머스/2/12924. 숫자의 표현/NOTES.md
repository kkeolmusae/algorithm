# 풀이
- Difficulty:  Lv2
- Topic:  연습문제
- Elapsed Time:  10m
- Status:  O
- Memo:  문제 어떻게 접근해야할지 몰라서 찾아보다가 슬라이딩 윈도우 얘기가 나와서 그대로 풀어봤다.

## 내 풀이
- left 는 왼쪽, right는 오른쪽으로 잡고
- 숫자가 기준보다 작으면 right를 이동시키고
- 같으면 anser +=1
- 그리고 left를 이동시키기전에 값을 빼줬다.
```py
def solution(n):
    if n < 3:
        return 1

    tmp = [i for i in range(n)]

    left = 1
    right = 2
    answer = 1
    sum = tmp[left] + tmp[right]
    while left < right:
        if sum < n:
            right += 1
            sum += tmp[right]
            continue
        if sum == n:
            answer += 1
        sum -= tmp[left]
        left += 1

    return answer
```