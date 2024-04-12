def dfs(graph, start_node):
    visit = list()
    stack = list()
    stack.append(start_node)
    while stack:
        node = stack.pop()
        if node not in visit:
            visit.append(node)
            stack.extend(graph[node])
    return visit


def dfs_recursive(graph, start, visited=[]):
    ## 데이터를 추가하는 명령어 / 재귀가 이루어짐
    visited.append(start)

    for node in graph[start]:
        if node not in visited:
            dfs_recursive(graph, node, visited)
    return visited
