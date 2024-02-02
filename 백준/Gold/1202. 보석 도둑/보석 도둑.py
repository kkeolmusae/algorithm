import heapq
import sys

input=sys.stdin.readline

def solution():
  n, k = map(int, input().split())

  gems = []
  for i in range(1, n+1):
      gems.append(list(map(int, input().split())))
  gems.sort() # 가벼운 보석 순이 앞으로 오게 정렬

  bags = []
  for i in range(n+1, n+1+k):
      bags.append(int(input()))
  bags.sort() # 담을 수 있는 보석의 무게가 가벼운것부터 가방 정렬

  result = 0
  tmp = []
  i = 0
  for bag in bags:
      while i < len(gems) and gems[i][0] <= bag:
          heapq.heappush(tmp, -gems[i][1])
          i+=1
      if len(tmp):
          result -= heapq.heappop(tmp)
  return result

print(solution())