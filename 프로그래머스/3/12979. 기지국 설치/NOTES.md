# 풀이
- Difficulty:  Lv3
- Topic:  Summer/Winter Coding(~2018)
- Elapsed Time:  20m
- Status:  O 
- Memo: 막 어렵진 않았음. 할만한 정도?

## 내 풀이
첫번째 기지국을 시작으로, 다음 초기 기지국까지 연결을 하면서 중간에 필요한 만큼 설치하고, 좌/우로 가면서 필요한 만큼 기지국 설치해서 해결
```py
def solution(n, stations, w):

    left = stations[0] - w
    right = stations[0] + w

    cnt = 0
    for s in stations[1:]:
        l = s - w
        while l - right > 1:  # 두칸이상 차이나면 (떨어져있으면)
            cnt += 1  # 기지국 설치
            right += w * 2 + 1  # 새 기지국 우측 범위까지 갱신
        right = max(s + w, right)  # 우측 범위 갱신

    # 좌측으로 안닿는곳 체크
    while left > 1:
        left -= w * 2 + 1
        cnt += 1

    # 우측으로 안닿는곳 체크
    while right < n:
        right += w * 2 + 1
        cnt += 1
    return cnt
```

## 다른 풀이
### Approach 1:
```py
```

### Approach 2:
```py
```

### Approach 3:
```py
```

### Approach 4:
```py
```

### Approach 5:
```py
```