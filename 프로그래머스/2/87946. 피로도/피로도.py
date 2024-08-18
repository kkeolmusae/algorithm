from itertools import permutations


def solution(k, dungeons):
    n = len(dungeons)
    answer = -1
    dungeon_list = list(permutations(dungeons, n))

    for dungeons in dungeon_list:
        fatigue = k # 피로도
        cnt = 0
        for dungeon in dungeons:
            min_fatigue, use_fatigue = dungeon # ["최소 필요 피로도", "소모 피로도"]
            if min_fatigue > fatigue:
               break 
            fatigue -= use_fatigue
            cnt += 1
        answer = max(cnt, answer)
            
    return answer