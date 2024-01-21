function solution(A,B){
    let answer = 0;
    A.sort((a,b) => { return Number(a)-Number(b)})
    B.sort((a,b) => { return Number(b)-Number(a)})

    for (let idx in A) {
        answer += A[idx] * B[idx];
    }

    return answer;
}