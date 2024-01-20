function solution(numbers) {
    const sum = numbers.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);
    return sum / numbers.length;
}