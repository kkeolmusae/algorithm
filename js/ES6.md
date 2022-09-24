# ES6

<hr>

## 1. Shorthand property names

```javascript
const name = 'dev_min';
const age = '19';

const person1 = {
    name: name,
    age: age
}
```

key 와 value 가 동일하다면 축약형으로 사용.

```javascript
const name = 'dev_min';
const age = '19';

const person2 = {
    name,
    age
}
```

## 2. Destructuring assignment

```javascript
const student = {
    name: 'Anna',
    level: 3,
}

console.log(student.name, student.level);
```

Destructuring assignment를 시용하면 편리하게 Object에서 꺼내서 사용할 수 있음

```javascript
const student = {
    name: 'Anna',
    level: 3,
}

const {name, level} = student;
console.log(name, level);

// 객체의 기본 이름이 아닌 새로운 이름을 사용하고 싶은 경우에는 key옆에 콜론(:)과 새로운 이름 쓰면 됨

const {name: newName, level: newLevel} = student;
console.log(newName, newLevel)
```

Obejct 가 아닌 Array에서도 사용이 가능함.

```javascript
// array 
const ['apple', 'banana'] = fruits;

// 기존 코드
{
    const apple = fruits[0];
    const bananna = fruits[1];
    console.log(apple, banana);
}

// Destructuring assignment 
{
    const [apple, banana] = fruits;
    console.log(apple, banana);
}
```

## 3. Spread Syntax

객체 혹은 배열들을 펼칠 수 있게 해줌.

- 펼칠 대상이 객체인 경우

```javascript
const myObject1 = {
    laptop: 'MacBook Pro',
    tablet: 'iPad Pro 11'
}

const myObject2 = {
    ...myObject1,
    phone: 'Galaxy Note 10'
};

console.log(myObject1); // {laptop: "MacBook Pro", tablet: "iPad Pro 11"}
console.log(myObject2); // {laptop: "MacBook Pro", tablet: "iPad Pro 11", phone: "Galaxy Note 10"}
```

- 펼칠 대상이 배열인 경우

```javascript
// 새로운 배열을 복사할 수 도 있고,
const myArray1 = ['Canna', 'Cuzz', 'Faker', 'Teddy', 'Effort'];

const myArray2 = [...myArray1];

console.log(myArray1); // ["Canna", "Cuzz", "Faker", "Teddy", "Effort"]
console.log(myArray2); // ["Canna", "Cuzz", "Faker", "Teddy", "Effort"]

console.log(myArray1 === myArray2); // false



// 펼친 배열을 객체로 만들 수 도 있다
const myArray = ['Canna', 'Cuzz', 'Faker', 'Teddy', 'Effort'];

const myObject = {...myArray};

console.log(myArray); // ["Canna", "Cuzz", "Faker", "Teddy", "Effort"]
console.log(myObject); // {0: "Canna", 1: "Cuzz", 2: "Faker", 3: "Teddy", 4: "Effort"}



// *나머지 매개변수로도 활용할 수 있음.
function myFunction(name, ...members) {
    return {name: name, members: members}
}

const myTeam1 = myFunction('T1', 'Canna', 'Cuzz', 'Faker', 'Teddy', 'Effort');
const myTeam2 = myFunction('Damwon', 'Nuguri', 'Canyon', 'ShowMaker', 'Ghost', 'BeryL');

console.log(myTeam1); // {name: "T1", members: Array(5)}
console.log(myTeam2); // {name: "Damwon", members: Array(5)}
```

## 4. Default parameters

```javascript
function printMessage(message) {
    if (message === null || message === undefined) {
        message = 'default message';
    }
    console.log(message);
}

printMessage('hello'); // hello
printMessage(); // default message

```

기존에는 파라미터로 전달받은 값에 대해서 분기문으로 기본값을 할당해줌

```javascript
function printMessage(message = 'default message') {
    console.log(message);
}

printMessage('hello'); // hello
printMessage(); // default message

```

## 5. Ternary  Operator (삼항 연산자)

condition ? exprIfTrue : exprIfFalse

```javascript
const isCat = true;

// 기존
{
    let component;
    if (isCat) {
        component = 'cat';
    } else {
        component = 'dog';
    }
    console.log(component);
}

// Ternary Operator 
{
    const component = isCat ? 'cat' : 'dog';
    console.log(component);
    console.log(isCat ? 'cat' : 'dog');
}

```

## 6. Template Literals

백틱(`) 과 달러+중괄호(${}) 를 사용하여 표현
```javascript
const age = 26;
const nationality = 'korea'; 

// 기존
console.log('현재 나이는: ' + age + ' 이고 국적은: ' + nationality + '입니다.');

// Template Literals
console.log(`현재 나이는: ${age} 이고 국적은: ${nationality} 입니다.`);

```
