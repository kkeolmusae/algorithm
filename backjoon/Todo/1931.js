const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

function solution(input) {
  let answer = 0;
  const N = Number(input[0]);
  const arr = input.slice(1, N + 1).map((time) => {
    const [startTime, endTime] = time.split(" ").map(Number);
    return {
      startTime,
      endTime,
    };
  });

  const sortedArr = arr.sort((a, b) => {
    // 종료시간이 같은 경우, 시작시간이 더 빠른걸 앞에 배치
    if (a.endTime === b.endTime) {
      return a.startTime - b.startTime;
    }
    return a.endTime - b.endTime;
  });

  let finishHour = 0;

  for (const meeting of sortedArr) {
    if (meeting.startTime >= finishHour) {
      finishHour = meeting.endTime;
      answer++;
    }
  }

  return answer;
}

console.log(solution(input));
