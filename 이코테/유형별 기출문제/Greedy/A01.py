def solution():
    n = int(input())
    data = list(map(int, input().split()))
    data.sort()

    result = 0  # 총 그룹 수
    count = 0  # 현재 그룹에 포함된 모험가의 수

    for i in data:  # 공포도가 낮은 것부터 하나씩 확인
        count += 1  # 현재 그룹에 해당하는 모험가 포함시키기

        # 현재 그룹에 포함된 모험가의 수가 현재의 공포도 이상이라면, 그룹 결성
        if count >= i:
            result += 1  # 총 그룹의 수 증가시키기
            count = 0  # 현재 그룹에 포함된 모험가의 수 초기화


# 오름차순으로 정렬하고 앞에서부터 공포도를 하나씩 확인하며
# '현재 그룹에 포함된 모험가의 수'가 '현재 확인하고 있는 공포도'보다 크거나 같다면,
# 이를 그룹으로 설정하는 방법으로 구현됨
solution()
