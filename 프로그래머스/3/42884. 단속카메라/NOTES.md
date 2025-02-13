# 풀이
- Difficulty:  Lv3
- Topic:  탐욕법(Greedy)
- Elapsed Time:  10m
- Status:  O
- Memo:  막 엄청 어렵진 않았다. 어떤 위치에 카메라를 설치하는게 좋은지만 생각해내면 정렬하고 금방 푸는 문제

## 내 풀이
```py
def solution(routes):
    routes.sort(key=lambda x: x[1])  # 차량 경로를 종료 지점 기준으로 정렬

    answer = 0
    camera = -30001  # 마지막으로 설치한 카메라 위치

    for left, right in routes:
        if camera < left:  # 현재 카메라가 다음 차량의 진입 지점보다 앞에 있을 경우
            answer += 1
            camera = right  # 새로운 카메라를 해당 차량의 종료 지점에 설치

    return answer
```