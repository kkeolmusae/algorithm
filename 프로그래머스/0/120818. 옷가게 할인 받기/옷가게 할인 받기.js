function solution(price) {
    let sales = 0;
    if (price >= 500_000) {
        sales = 0.2;
    } else if (price >= 300_000) {
        sales = 0.1;
    } else if (price >= 100_000) {
        sales = 0.05;
    }
    return Math.floor(price - price * sales);
}