def solution(brown, yellow):
    def calculate_around(a, b):
        return a * 2 + b * 2 + 4
    
    total_grid = brown + yellow # 총 격자 개수
    
    i = 1
    while True:
        w = yellow / i # 노란색 가로
        h = yellow / w # 노란색 세로
        
        
        b = calculate_around(w, h) # 노란색 주변 갈색 개수
        while True:
            if yellow + b == total_grid: 
                return [w+2, h+2]

            if b > total_grid - yellow: # 갈색이 많으면 i 증가
                i += 1
                break
            else: # 갈색이 작은거라 확장해봄
                b += yellow