function fib(num) {
  if (num === 1 || num === 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
