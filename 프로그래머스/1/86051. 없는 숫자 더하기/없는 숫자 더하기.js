function solution(numbers) {
    var answer = 45;
    numbers.map((num) => {
        answer -= num;
    })
    return answer;
}