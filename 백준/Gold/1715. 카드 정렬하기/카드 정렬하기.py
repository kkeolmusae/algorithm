from queue import PriorityQueue
from sys import stdin

N = int(stdin.readline())
cards = PriorityQueue()
for _ in range(N):
    cards.put(int(stdin.readline()))



def solution(queue):
    total = 0

    while queue.qsize() > 1:
        sum = queue.get() + queue.get()
        total += sum
        queue.put(sum)

    print(total)


solution(cards)
