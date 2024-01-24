function solution(a, b) {
    var answer = 0;
    for (const idx in a) {
        answer += a[idx] * b[idx]
    }
    return answer;
}