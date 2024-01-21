function solution(s) {
    let answer = [];
    s.split(" ").map((str) => {
        if (str.length > 1) {
            const convertedStr = str.slice(1).toLowerCase();
            answer.push(str[0].toUpperCase() + convertedStr)
        } else {
            answer.push(str.toUpperCase())
        }
    })
    return answer.join(" ");
}