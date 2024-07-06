def solution():
  nums = input()
  total = 0

  for i in nums:
    n = int(i)
    
    if n <= 1 or total <= 1: # 계산해야하는 값이 0 또는 1이거나, 기존값이 0 또는 1이면 더하는게 좋다.
      total += n
    else:
      total *= n

  return total
    

  
print(solution())