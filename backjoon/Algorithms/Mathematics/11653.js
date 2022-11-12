const a = require("fs").readFileSync("backjoon/input.txt").toString();

let integer = Number(a);
let i = 2;
while (true) {
  if (integer === 1) {
    break;
  }
  if (integer % i === 0) {
    console.log(i);
    integer = integer / i;
    continue;
  } else {
    i += 1;
  }
}
