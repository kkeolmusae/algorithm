def solution(routes):
    routes.sort(key=lambda x: x[1])  # 차량 경로를 종료 지점 기준으로 정렬

    answer = 0
    camera = -30001  # 마지막으로 설치한 카메라 위치

    for left, right in routes:
        if camera < left:  # 현재 카메라가 다음 차량의 진입 지점보다 앞에 있을 경우
            answer += 1
            camera = right  # 새로운 카메라를 해당 차량의 종료 지점에 설치

    return answer