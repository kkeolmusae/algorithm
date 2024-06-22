from collections import defaultdict

def solution(clothes):
    dic = defaultdict(int)

    for _, type in clothes:
        dic[type] += 1
    
    result = 1
    for c in dic:
        result *= dic[c] + 1 # 입지 않는 경우 포함
    
    return result - 1 # 아무것도 안입는 경우 제외