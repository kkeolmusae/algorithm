def solution():
  n = int(input())
  coins = list(map(int, input().split()))
  coins.sort()
  
  target = 1
  for c in coins:
    if c > target: 
      break
    target += c
  
  return target
  
  
print(solution())


'''
5
3 2 1 1 9
'''
