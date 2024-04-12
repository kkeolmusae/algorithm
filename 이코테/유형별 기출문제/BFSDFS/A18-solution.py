# 균형잡힌 괄호 문자열
def balanced_index(p):
    count = 0  # 왼쪽 괄호의 수
    for i in range(len(p)):
        if p[i] == "(":
            count += 1
        else:
            count -= 1
        if count == 0:
            return i


def check_proper(p):
    count = 0  # 왼쪽 괄호의 수
    for i in p:
        if i == "(":
            count += 1
        else:
            count -= 1

        if count < 0:  # 쌍이 안맞으면
            return False
    return True


def solution(p):
    answer = ""

    # 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
    if p == "":
        return answer

    # 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
    index = balanced_index(p)
    u = p[: index + 1]
    v = p[index + 1 :]

    if check_proper(p):
        # 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
        answer = u + solution(v)
    else:
        # 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
        answer = "("  # 4-1
        answer += solution(v)  # 4-2
        answer += ")"  # 4-3
        u = list(u[1:-1])  # 4-4. u의 첫 번째와 마지막 문자를 제거하고,
        for i in range(len(u)):  # 나머지 문자열의 괄호 방향을 뒤집어서
            if u[i] == "(":
                u[i] = ")"
            else:
                u[i] = "("
        answer += "".join(u)  # 뒤에 붙입니다.

    return answer  # 생성된 문자열을 반환합니다.


# print(solution("()))((()"))  # "()(())()"
# print(solution("(()())()"))  # "(()())()"
print(solution(")("))  # "()"
