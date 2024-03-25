from collections import deque


def solution():
    cnt = int(input())

    answer = []
    for _ in range(cnt):
        queue = deque()
        n, m = map(int, input().split())
        orders = map(int, input().split())

        for idx, o in enumerate(orders):
            queue.append((idx, o))

        cnt = 0
        while True:
            idx, priority = queue[0]

            # 가장 우선순위가 높은거면
            if priority == max(queue, key=lambda x: x[1])[1]:
                cnt += 1

                if idx == m:
                    answer.append(str(cnt))
                    break
                queue.popleft()
            else:
                queue.append(queue.popleft())

    return "\n".join(answer)


print(solution())
