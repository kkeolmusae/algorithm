# 올바른 괄호 문자열인지 체크
def check_correct(s):
    l_count = 0
    for i in range(len(s)):
        st = s[i]
        if st == "(":
            l_count += 1
        else:
            l_count -= 1

        if l_count < 0:
            return False
    return True


def split_u_v(s):
    l_count = 0  # ( 처럼 생긴거
    r_count = 0  # ) 처럼 생긴거

    for i in range(len(s)):
        st = s[i]
        if l_count == r_count and l_count > 0:
            break
        if st == "(":
            l_count += 1
        else:
            r_count += 1
    return s[: l_count + r_count], s[l_count + r_count :]


def solution(p):
    if p == "":
        return ""

    answer = ""

    u, v = split_u_v(p)

    if check_correct(u):
        answer = u + solution(v)
    else:
        answer = "("
        answer += solution(v)
        answer += ")"

        u = list(u[1:-1])
        for i in range(len(u)):
            if u[i] == "(":
                u[i] = ")"
            else:
                u[i] = "("
        answer += "".join(u)

    return answer


# print(solution("()))((()"))  # "()(())()"
# print(solution("(()())()"))  # "(()())()"
# print(solution(")("))  # "()"
