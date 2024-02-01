function solution(name, yearning, photo) {
    const dic = {}
    name.forEach((n, idx) => {
        dic[n] = yearning[idx]
    })
    
    const answer = [];
    for (let i =0; i<photo.length; i++) {
        let count = 0;
        photo[i].map((p) => {
            count += dic[p] || 0;
        })
        answer.push(count);
    }
    return answer;
}