function solution(n, k) {
    const SHEEP_STICK = 12000;
    const BEVERAGE = 2000;
    const bonus = Math.floor(n/10);
    return n * SHEEP_STICK + (k - bonus) * BEVERAGE;
}