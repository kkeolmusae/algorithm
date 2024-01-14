function solution(n) {
    if(n<=2) return n;

    let answer = 0;
    const obj = {};
    
    for (let i =1; i<n/2; i++) {
        if(n%i ===0) {
            obj[i] = true;
            obj[n/i] = true;
        }
    }
    
    Object.keys(obj).map((key) => {
        answer += Number(key)
    })
    return answer;
}