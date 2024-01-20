function solution(n) {
    if (n < 2) return 0;
    let answer = 0;
    for (let i = 2; i<=n; i++) {
        if (i % 2 === 0) answer += i
    }
    return answer;
}