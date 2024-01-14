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


## 언어 Python 사용하는 경우 - stdin.readline() 사용방법

출처: https://velog.io/@yeseolee/Python-%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%9E%85%EB%A0%A5-%EC%A0%95%EB%A6%ACsys.stdin.readline


### 한 개의 정수를 입력받을 때
sys.stdin.readline()은 한줄 단위로 입력받기 때문에 "\n" (개행문자) 도 같이 입력받아짐.
그래서 형변환 한번 해줘야함.

```python
import sys
a = int(sys.stdin.readline())
```

<br>

### 정해진 개수의 정수를 한줄에 입력받을 때
map()은 반복 가능한 객체(리스트 등)에 대해 각각의 요소들을 지정된 함수로 처리해주는 함수입니다.
위와 같이 사용한다면 a,b,c에 대해 각각 int형으로 형변환을 할 수 있습니다.
```python
import sys
a,b,c = map(int,sys.stdin.readline().split())
```

<br>

### 임의의 개수의 정수를 한줄에 입력받아 리스트에 저장할 때
split()은 문자열을 나눠주는 함수입니다.
괄호 안에 특정 값을 넣어주면 그 값을 기준으로 문자열을 나누고, 아무 값도 넣어주지 않으면 공백(스페이스, 탭, 엔터 등)을 기준으로 나눕니다.

list()는 자료형을 리스트형으로 변환해주는 함수입니다.
map()은 맵 객체를 만들기 때문에, 리스트형으로 바꿔주기 위해서 list()로 감싸주었습니다.

```python
import sys
data = list(map(int,sys.stdin.readline().split()))
```

<br>

### 임의의 개수의 정수를 n줄 입력받아 2차원 리스트에 저장할 때
이렇게 한다면 각 요소의 길이가 동일한 2차원 리스트도 만들 수 있고,
각각 길이가 다른 2차원 리스트도 입력 받을 수 있습니다.
```python
import sys
data = []
n = int(sys.stdin.readline())
for i in range(n):
    data.append(list(map(int,sys.stdin.readline().split())))
```

<br>

### 문자열 n줄을 입력받아 리스트에 저장할 때
strip()은 문자열 맨 앞과 맨 끝의 공백문자를 제거합니다.
```python
import sys
n = int(sys.stdin.readline())
data = [sys.stdin.readline().strip() for i in range(n)]
```
