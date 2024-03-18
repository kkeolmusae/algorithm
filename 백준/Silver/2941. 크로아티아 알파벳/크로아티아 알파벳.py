def solution():
    alphabet = set(["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="])

    s = input()

    i = 0
    cnt = 0
    while i < len(s):
        st_type_a = s[i : i + 2]
        st_type_b = s[i : i + 3]

        if st_type_a in alphabet:
            i += 2
        elif st_type_b in alphabet:
            i += 3
        else:
            i += 1
        cnt += 1
    return cnt


print(solution())
