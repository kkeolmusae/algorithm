const [a, b] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ");
const i = a;
const j = b;

sumBigNumber(i, j);

function sumBigNumber(i, j) {
  let firstNumArr = [];
  let secondeNumArr = [];
  let sumNumArr = [];
  if (i.split("").length < j.split("").length) {
    firstNumArr = j.split("");
    secondeNumArr = i.split("");
  } else {
    firstNumArr = i.split("");
    secondeNumArr = j.split("");
  }

  let bonus = 0;
  let iidx = secondeNumArr.length - 1;
  for (let idx = firstNumArr.length - 1; idx >= 0; idx--) {
    const sum =
      Number(firstNumArr[idx]) +
      Number(secondeNumArr[iidx] ? secondeNumArr[iidx] : 0) +
      bonus;
    if (sum < 10) {
      sumNumArr.push(sum);
      bonus = 0;
    } else {
      sumNumArr.push(sum % 10);
      bonus = parseInt(sum / 10);
    }
    iidx--;
  }
  if (bonus > 0) {
    sumNumArr.push(bonus);
  }
  console.log(sumNumArr.reverse().join(""));
}
