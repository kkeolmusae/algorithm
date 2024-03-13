def possible(answer):
    for x, y, stuff in answer:
        if stuff == 0:  # 기둥 조건
            if (
                y == 0  # 바닥에 있거나
                or [x - 1, y, 1] in answer  # 보의 한쪽끝(왼쪽) 부분 위에 있거나
                or [x, y, 1] in answer  # 보의 한쪽끝(오른쪽) 부분 위에 있거나
                or [x, y - 1, 0] in answer  # 다른 기둥 위
            ):
                continue
            return False

        if stuff == 1:  # 보 조건
            if (
                [x + 1, y - 1, 0] in answer  # 한쪽 끝 부분이 왼쪽 아래 기둥 위에 있거나
                or [x, y - 1, 0]
                in answer  # 한쪽 끝 부분이 오른쪽 아래 기둥 위에 있거나
                or (
                    [x - 1, y, 1] in answer and [x + 1, y, 1] in answer
                )  # 보 사이에 있거나
            ):
                continue
            return False
    return True


def solution(n, build_frame):
    answer = []
    for frame in build_frame:
        x, y, stuff, operate = frame  # stuff 0: 기둥, 1: 보 / operate 0: 삭제, 1: 설치

        # 삭제
        if operate == 0:
            answer.remove([x, y, stuff])  # 일단 삭제해보고
            if not possible(answer):  # 구조물 체크해보고
                answer.append([x, y, stuff])  # 구조물이 조건에 안맞으면 원복

        # 설치
        if operate == 1:
            answer.append([x, y, stuff])  # 일단 더해보고
            if not possible(answer):  # 구조물 체크해보고
                answer.remove([x, y, stuff])  # 구조물이 조건에 안맞으면 원복
    return sorted(answer)


solution(
    5,
    [
        [0, 0, 0, 1],
        [2, 0, 0, 1],
        [4, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [2, 1, 1, 1],
        [3, 1, 1, 1],
        [2, 0, 0, 0],
        [1, 1, 1, 0],
        [2, 2, 0, 1],
    ],
)
