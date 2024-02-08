# 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어수
# N: 전체 스테이지의 수, stages: 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호


def sort_options(a, b):
    if a[1] > b[1]:
        return a - b
    if a[1] == b[1]:
        return a[0] - b[0]


def solution(N, stages):
    peoples = len(stages)
    failed_stage = [0] * (N + 1)
    percentage_stage = [0] * (N + 1)
    for i in stages:
        if i > N:  # 스테이지 수 보다 크면 다꺤거니깐 넘겨야해
            continue
        failed_stage[i] += 1

    for idx in range(1, len(failed_stage)):
        failed_people_count = failed_stage[idx]  # 해당 스테이지에 남아있는 사람
        if failed_people_count == 0:
            percentage_stage[idx] = [idx, 0]
            continue
        percentage_stage[idx] = [idx, failed_people_count / peoples]
        peoples -= failed_people_count

    answer = []
    for i in sorted(percentage_stage[1:], key=lambda a: (-a[1], a[0])):
        answer.append(i[0])
    return answer