```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const t1 = performance.now(); // 1/1000 초 단위
addUpTo(1000000000);
const t2 = performance.now();
console.log(`Time Eplapsed: ${(t2 - t1) / 1000} seconds`);
```

```javascript
const instructor = {
    firstName = "Kelly",
    isInstructor = true,
    favoriteNumbers = [1,2,3,4];
}
```
