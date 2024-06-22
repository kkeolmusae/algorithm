from collections import defaultdict, deque
import heapq

def solution(genres, plays):
    dic = defaultdict(list)
    plays_dic = defaultdict(int)
    
    for idx in range(len(genres)):
        heapq.heappush(dic[genres[idx]], (-plays[idx], idx))
        plays_dic[genres[idx]] += plays[idx] # 장르별로 plays 집계
    
    genres_rank = [] # 장르별로 plays 순위 
    for genre in plays_dic:
        heapq.heappush(genres_rank, (-plays_dic[genre], genre))
    
    genre_count = defaultdict(int) # 장르별 수록횟수 (2 넘어가면 걍 넘어가게 하려고)
    answer = []
    while genres_rank:
        genre = heapq.heappop(genres_rank)[1] # 장르 가져와서
        
        while dic[genre]:
            idx = heapq.heappop(dic[genre])[1]
            if genre_count[genre] >= 2:
                continue
            answer.append(idx)  
            genre_count[genre] += 1
    return answer