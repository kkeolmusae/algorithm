function solution(s) {
    const arr = s.split(" ").map(Number)
    let answer = `${Math.min(...arr)} ${Math.max(...arr)}`
    return answer;
}