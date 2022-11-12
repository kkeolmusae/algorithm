const fs = require("fs");

const input = fs
  .readFileSync("backjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const currentTime = input[0].split(" ").map(Number);

const currentHour = currentTime[0];
const currentMinute = currentTime[1];
const cookTime = Number(input[1]);

getTime(currentHour, currentMinute, cookTime);

function getTime(currentHour, currentMinute, cookTime) {
  let minute = currentMinute + cookTime;

  while (minute >= 60) {
    currentHour += 1;
    minute -= 60;
  }

  if (currentHour >= 24) {
    currentHour = currentHour % 24;
  }

  console.log(currentHour, minute);
}
