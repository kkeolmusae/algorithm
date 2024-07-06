from itertools import combinations
def solution():
  n, m = map(int, input().split()) # n: 도시 사이즈, m: 폐업안시킬 치킨집 수
  chicken, house = [], []
  
  # 치킨집, 가정집 위치 파악
  for r in range(n):
    data = list(map(int, input().split()))
    for c in range(n):
      if data[c] == 1: # 집이면 
        house.append((r,c)) 
      elif data[c] == 2: # 치킨집이면
        chicken.append((r,c))
  
  # 폐점안시킬 치킨집의 경우의 수 
  candidates = list(combinations(chicken, m))
  
  # 치킨 거리의 합을 계산하는 함수
  def get_sum(candidate):
    result = 0
    # 모든 집에 대해서
    for hx, hy in house:
      # 가장 가까운 치킨집 찾기
      temp = 1e9
      for cx, cy in candidate:
        temp = min(temp, abs(hx- cx) + abs(hy- cy))
      # 가장 가까운 치킨집 까지의 거리 더하기
      result += temp
    return result
  
  # 치킨 거리의 합의 최소를 찾아 출력
  result = 1e9
  for candidate in candidates:
    result = min(result, get_sum(candidate))

  return result

  
print(solution())