# 백준에서 문제를 제출할 때 기본적으로 들어가는 세팅

## 언어 node.js일 경우

vsc에서 테스트할때는 /dev/stdin 대신 backjoon/input.txt 사용

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


## 언어 Python 사용하는 경우
```python
# 기본 방법
A = int(input())

print(A)

# sys.stdin.readline()
# readline()을 사용하는 경우, 맨 뒤의 '\n'(엔터)까지 입력받게 되는데 엔터를 제외하고 입력받고 싶다면 strip()을 추가해주면 된다. sys.stdin.readline().strip()

import sys
n = int(sys.stdin.readline())

# map
# map(데이터타입, 리스트) -> 리스트 원소들을 해당 데이터 타입으로 바꿔준다.
import sys
n, k = map(int, sys.stdin.readline().split())
```