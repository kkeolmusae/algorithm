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