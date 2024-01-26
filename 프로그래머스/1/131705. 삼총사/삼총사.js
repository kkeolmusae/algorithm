function solution(number) {
    let answer = 0;
    for (let i =0; i<number.length; i++) {
        for (let j = 1; j < number.length; j++) {
            for (let k = 1; k< number.length; k++) {
                if (number[i] + number[i+j] + number[i+j+k] === 0) {
                    answer++;
                }
            }
        }
    }
    return answer;
}