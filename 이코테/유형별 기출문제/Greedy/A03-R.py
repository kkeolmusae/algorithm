def solution():
  n = input()
  
  count0 = 0 # 전부 0으로 바꾸는 경우
  count1 = 0 # 전부 1로 바꾸는 경우
  
  if n[0] == "0":  # 첫번째 문자 처리
    count1 += 1
  else:
    count0 += 1
    
  
  for i in range(len(n) - 1):
    if n[i] != n[i+1]: # 문자가 바뀌는경우
        if n[i+1] == "1": # 다음에 1로 바뀌는 경우
          count0 += 1
        else:
          count1 += 1
  
  return min(count0, count1)

print(solution())