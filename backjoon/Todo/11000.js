const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const N = Number(input[0]);
  const classTime = [];

  for (let idx = 1; idx <= N; idx++) {
    const time = input[idx];
    const [startTime, endTime] = time.split(" ").map(Number);
    classTime.push({ time: startTime, isStart: 1 });
    classTime.push({ time: endTime, isStart: -1 });
  }

  const sortedClassTime = classTime.sort((a, b) => {
    if (a.time === b.time) {
      return a.isStart - b.isStart;
    }
    return a.time - b.time;
  });

  let maximumClassCount = 0;
  let currentClassCount = 0;
  for (const classTime of sortedClassTime) {
    if (classTime.isStart === 1) {
      currentClassCount++;
    } else {
      currentClassCount--;
    }
    maximumClassCount = Math.max(currentClassCount, maximumClassCount);
  }

  return maximumClassCount;
}
console.log(solution(input));
