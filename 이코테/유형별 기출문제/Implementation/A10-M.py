import copy


def make_arr(lock, lock_size, key_size):
    expanded_arr = [
        [0] * (lock_size + key_size * 2 - 2)
        for _ in range(lock_size + key_size * 2 - 2)
    ]

    # 자물쇠 중앙 배치
    for i in range(lock_size):
        for j in range(lock_size):
            expanded_arr[key_size - 1 + i][key_size - 1 + j] = lock[i][j]

    return expanded_arr


def spin_key(arr, key_size):
    tmp = copy.deepcopy(arr)
    for i in range(len(arr)):
        for j in range(len(arr)):
            tmp[j][key_size - 1 - i] = arr[i][j]

    return tmp


def insert_key(lock, key, x, y, key_size):
    for i in range(key_size):
        for j in range(key_size):
            lock[x + i][y + j] += key[i][j]


def delete_key(lock, key, x, y, key_size):
    for i in range(key_size):
        for j in range(key_size):
            lock[x + i][y + j] -= key[i][j]


def check_lock(lock, lock_size, key_size):
    for i in range(lock_size):
        for j in range(lock_size):
            if lock[key_size + i - 1][key_size + j - 1] != 1:
                return False
    return True


def solution(key, lock):
    lock_size = len(lock[0])
    key_size = len(key[0])

    expanded_lock = make_arr(lock, lock_size, key_size)

    for _ in range(4):
        for i in range(key_size + lock_size - 1):
            for j in range(key_size + lock_size - 1):
                insert_key(expanded_lock, key, i, j, key_size)
                isSolved = check_lock(expanded_lock, lock_size, key_size)
                if isSolved:
                    return True
                delete_key(expanded_lock, key, i, j, key_size)
        key = spin_key(key, key_size)

    return False


# true
print(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]))

# key 사이즈 <= lock 사이즈
# 0 0 0
# 1 0 0
# 0 1 1

# 0 1 0
# 1 0 0
# 1 0 0
