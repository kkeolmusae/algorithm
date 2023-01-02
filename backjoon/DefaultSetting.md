# 백준에서 문제를 제출할 때 기본적으로 들어가는 세팅 (언어 node.js일 경우)

# vsc에서 테스트할때는 /dev/stdin 대신 backjoon/input.txt 사용

```javascript
// 백준 제출용
const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((i) => parseInt(i));
let i = a;
let j = b;

...

console.log(j)
console.log(a*b/j)
```

```javascript
// vsc 테스트용
const [a, b] = require("fs")
  .readFileSync("backjoon/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => parseInt(i));
let i = a;
let j = b;

...

console.log(j)
console.log(a*b/j)
```
