# 서로 무게가 다른 볼링공을 고를 꺼임.

def solution():
  # n: 볼링공의 개수, m: 공의 최대 무게
  n, m = map(int, input().split())
  balls = list(map(int, input().split()))
  
  ball_count = [0] * (m+1)
  
  for i in balls: # 몇번 공이 몇개있는지 기록
    ball_count[i] += 1
    
  result = 0
  for i in range(1,m):
    count = 0
    for j in range(i+1, m+1):
      count += ball_count[i] * ball_count[j]
    result += count
  return result
  
  
  
print(solution())