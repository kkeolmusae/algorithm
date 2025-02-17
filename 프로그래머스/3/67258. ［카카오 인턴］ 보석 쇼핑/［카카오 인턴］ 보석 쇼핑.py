from collections import defaultdict

def solution(gems):
    total = len(set(gems))  # 보석의 전체 종류 개수
    gem_count = defaultdict(int)  # 현재 포함된 보석 개수

    start, end = 0, 0  # 투 포인터
    min_length = len(gems) + 1  # 최소 구간 길이
    answer = [0, 0]  # 최소 구간 시작, 끝

    gem_count[gems[start]] += 1  # 첫 번째 보석 추가

    while end < len(gems):  
        if len(gem_count) == total:  # 모든 보석을 포함한 경우
            if (end - start) < min_length:  
                min_length = end - start  
                answer = [start + 1, end + 1]  # 문제에서 1-based index 요구

            # `start`를 오른쪽으로 이동 (구간을 줄이면서 최소 길이 찾기)
            gem_count[gems[start]] -= 1  
            if gem_count[gems[start]] == 0:
                del gem_count[gems[start]]  # 보석이 0개가 되면 삭제
            start += 1  
        else:
            end += 1  
            if end < len(gems):  # `end`가 범위를 벗어나지 않도록 체크
                gem_count[gems[end]] += 1  

    return answer