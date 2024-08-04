from collections import deque

def solution(bridge_length, weight, truck_weights):
    brdige = deque()
    truck_idx = 0
    current_wegith = 0
    
    current_time = 0
    
    while truck_idx < len(truck_weights):
        current_time += 1
        if brdige and brdige[0][1] + current_time > bridge_length + 1: # 출차 (현재 시간이랑 입차 시간 더했을때 다리를 통과했을시간이면 출차)
            current_wegith -= brdige.popleft()[0]

        truck_weight = truck_weights[truck_idx]
        if current_wegith + truck_weight > weight: # 다리위에 트럭 더 못올리면
            brdige.append([0, current_time]) # 일단 0 넣기 
        else:
            brdige.append([truck_weight, current_time]) # 다리위에 트럭 올리고
            truck_idx += 1 # 다음 트럭으로 idx 올려주고
            current_wegith += truck_weight # 현재 
    
    while brdige:
        current_time +=1 
        if brdige[0][1] + current_time > bridge_length + 1: # 출차
            current_wegith -= brdige.popleft()[0]

    return current_time