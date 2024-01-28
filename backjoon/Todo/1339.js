const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [N, ...data] = input;

  const alphabetCount = {};
  for (let i = 0; i < N; i++) {
    let cal = 1;
    for (let j = data[i].length - 1; j >= 0; j--) {
      alphabetCount[data[i][j]] = (alphabetCount[data[i][j]] || 0) + cal;
      cal *= 10;
    }
  }

  const alphabetArr = [];
  for (const alphabet of Object.entries(alphabetCount)) {
    alphabetArr.push({
      key: alphabet[0],
      value: alphabet[1],
    });
  }
  alphabetArr.sort((a, b) => {
    return b.value - a.value;
  });

  let val = 9;
  const alphabetValue = {};
  alphabetArr.forEach((alphabet) => {
    alphabetValue[alphabet.key] = val--;
  });

  let answer = 0;
  for (const al of data) {
    let result = "";
    for (const a of al) {
      result += alphabetValue[a];
    }
    answer += Number(result);
  }
  return answer;
}

console.log(solution(input));
