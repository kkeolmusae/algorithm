function solution(absolutes, signs) {
    var answer = 0;
    for (const idx in absolutes) {
        if (signs[idx]) {
            answer += absolutes[idx];
        } else {
            answer -= absolutes[idx];
        }
    }
    return answer;
}