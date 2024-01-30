function solution(food) {
    let answer = [];
    for (let idx = 1; idx < food.length; idx++) {
        let cnt = Math.floor(food[idx] / 2);
        answer.push(idx.toString().repeat(cnt));
    }
    return answer.join("") + "0"+answer.reverse().join("");
}