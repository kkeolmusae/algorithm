# CallBack Pattern

<hr>

## 연속 전달 방식(The Continuation-Passing Style)

### 동기식 연속 전달 방식

```javascript
function add(a, b, callback) {
    callback(a + b);
}
```

### 비동기식 연속 전달 방식

```javascript
function additionAsync(a, b, callback) {
    setTimeout(() => callback(a + b), 100);
}
```

### 비 연속 전달(Non-continuation-passing) 방식의 콜백

```javascript
const result = [1, 5, 7].map(element => element - 1);
console.log(result);
```

<hr>

## 동기냐? 비동기냐?

### 예측할 수 없는 함수

하나는 특정 조건에서 동기적으로 동작하고, 다른 조건에서 비동기적으로 동작하는 API

```javascript
function createFileReader(filename) {
    const listeners = [];
    inconsistentRead(filename, value => {
        listeners.forEach(listener => listener(value))
    });

    return {
        onDataReady: listener => listeners.push(listener)
    };
}

const reader1 = createFileReader('data.txt');
reader1.onDataReady(data => {
    console.log(`First call data: ${data}`);

    const reader2 = createFileReader('data.txt');
    reader2.onDataReady(data => {
        console.log(`Second Call data: ${data}`);
    })
})
```

위의 코드실행시 'First call data: some data' 만 출력됨. reader1은 비동기적으로 동작해서 console을 무난히 찍는데 reader2는 'data.txt'라는 파일에 대한 캐시가 이미
있는 이벤트 루프의 사이클에서 생성되기 때문에 inconsistentRead에 대한 내부 호출은 동기 방식이 됨. 그래서 console 안찍음.

쉽게 말해서 js는 다른 함수를 실행하기 위해 함수를 중단 안함. reader1에서 createFielReader가 한번 읽혔기때문에 해당 관련 핸들러가 대기하고 있음. 그래서 createFileReader의
inconsistentRead 부분부터 동기적으로 돌아가다 보니(콜백 즉시 호출) console이 안찍힘.

해결책으로는 inconsistentRead()를 완전히 동기화 시키는 방법이 있음

```javascript
const fs = require('fs');
const cache = {};

function consistentReadSync(filename) {
    if (cache[filename]) {
        return cache[filename];
    } else {
        cache[filename] = fs.readFileSync(filename, 'utf8');
        return cache[filename];
    }
}
```

> 패턴 : 순수한 동기식 함수에 대해서는 직접 스타일을 사용하자.

### 지연 실행(Deferred execution)

위의 inconsistentRead() 함수를 비동기로 만들어서 해결

```javascript
process.nextTick() // 이벤트 루프의 다음 사이클까지 함수의 실행을 지연시킴

// nextTick()으로 지연된 콜백을 다른 I/O이벤트가 발생하기 전에 실행되서 재귀호출같은 상황에서 I/O Starvation 이 일어날 수 있음.
// setImmediate() 쓰면 이미 큐에 있는 I/O이벤트들의 뒤에 대기해서 I/O Starvation을 피할 수 있음
```

```javascript
const fs = require('fs')
const cache = {};

function consistentReadAsync(filename, callback) {
    if (cache[filename]) {
        process.nextTick(() => callback(cache[filename]));
    } else {
        // 비동기 함수
        fs.readFile(filename, 'utf8', (err, data) => {
            cache[filename] = data;
            callback(data);
        })
    }
}
```

<hr>

## Node.js 콜백 규칙

Node.js에서 연속 전달 스타일(CPS)의 API 및 콜백은 일련의 규칙을 가짐

### 콜백은 제일 마지막에

Node.js 함수에서 표준 규칙은 함수가 입력에서 콜백을 허용했다면 맨 마지막 인자로 전달되어야 함

```javascript
fs.readFile(filename, [options], callback)
// => 함수 호출의 가독성을 위함
```

### 오류는 맨 앞에

CPS함수에 의해 생성된 오류는 항상 콜백의 첫 번째 인수로 전달되며, 실제 결과는 두 번째 인수에서부터 전달됨.

동작이 에러없이 성공하면, 최초의 인수는 null 혹은 undefined가 됨

```javascript
fs.readFile('foo.txt', 'utf8', (err, data) => {
    if (err)
        handleError(err);
    else
        processData(data);
});
```

에러가 있는지 항상 체크하는게 좋음. 그리고 오류는 항상 Error type 이어야 함. 간단한 문자열이나 숫자를 오류 객체로 전달해서는 안됨.

### 오류 전파

동기식 직접 스타일 함수의 오류 전파는 throw 문을 사용하여 수행되므로 오류가 catch 될 때까지 호출 스택에서 실행됨

비동기식 CPS에서 적절한 오류 전달은 오류를 호출 체인의 다음에서 콜백으로 전달하여 수행됨

```javascript
const fs = require('fs');

function readJSON(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        let parsed;
        if (err) {
            // ... 오류를 전달하고 현재 함수 종료
            return callback(err) //에러 전달할 때 return 사용함
        }

        try {
            //파일 내용 해석
            parsed = JSON.parse(data);
        } catch (err) {
            //에러 catch
            return callback(err);
        }
        //에러 없으면 데이터 전달
        callback(null, parsed);
    });
};
```

### 캐치되지 않는 예외

캐치되지 않는 예외는 어플리케이션의 일관성을 보장할 수 없는 상태로 만듬. 이런 경우에는 어플리케이션을 종료한는 것이 좋음

```javascript
process.on('uncaughtException', (err) => {
    console.error(`This will catch at last the JSON parsing exception ${err.message}`);
    process.exit(1);
})
```