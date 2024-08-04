def solution(prices):
    n = len(prices)
    result = []
    for i in range(n):
        isFin = False
        for j in range(i+1, n):
            if prices[i] > prices[j]:
                result.append(j-i)
                isFin = True
                break
        if not isFin:
            result.append(n - i - 1)
    return result