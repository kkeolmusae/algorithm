function solution(price, money, count) {
    let answer = 0; // 내가 쓴돈 
    for(let i = 1; i<= count; i++) {
        answer += price * i;
    }

    return answer - money >= 0 ? answer - money : 0;
}