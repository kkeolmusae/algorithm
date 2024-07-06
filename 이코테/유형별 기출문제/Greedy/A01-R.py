def solution():
  n = int(input())
  fear_level = list(map(int, input().split()))
  fear_level.sort() 
  # 여행을 떠날 수 있는 그룹 수의 최댓값을 구하기 위해서는 
  # fear_level이 작은애들 부터 채워가면서 기준값이 넘어가면 cnt를 늘리게 하면 됨
   
  total_fear= 0
  cnt = 0
  
  for i in fear_level:
    total_fear += i

    if total_fear >= n:
      cnt +=1
      total_fear = 0
  
  print(cnt)
  
solution()