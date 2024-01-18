function solution(a, b) {
    let answer = 0;
    
    if (isOdd(a) && isOdd(b)) {
        answer += a ** 2 + b ** 2;
    } else if (!isOdd(a) && !isOdd(b)) {
        answer += Math.abs(a - b);
    } else {
        answer += 2 * (a + b)
    }
    return answer;
}
    
function isOdd(a) {
    return a % 2 === 0 ? false : true;
}