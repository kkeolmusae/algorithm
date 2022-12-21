# Dynamic Programming (동적 프로그래밍)

## 1. 단순한 점화식을 사용하여 해결
```javascript
// example
dp[i] = dp[i - 1] + dp[i - 2]; 
dp[i] = dp[i - 1] + n * dp[i - 2]; 
```

[1로 만들기](https://www.acmicpc.net/problem/1463)

[2×n 타일링](https://www.acmicpc.net/problem/11726)

[2×n 타일링 2](https://www.acmicpc.net/problem/11727)

[1, 2, 3 더하기](https://www.acmicpc.net/problem/9095)

[이친수](https://www.acmicpc.net/problem/2193)

[1, 2, 3 더하기 3](https://www.acmicpc.net/problem/15988)

[동물원](https://www.acmicpc.net/problem/1309)

<br>

## 2. dp[i] 와 dp[i - ?] 를 비교하여 그중 max값 혹은 min값 넣기
```javascript
// example
dp[i] = Math.max(dp[i], dp[i - j]); 
dp[i] = Math.min(dp[i], dp[i - j]);
```
[카드 구매하기](https://www.acmicpc.net/problem/11052)

[카드 구매하기 2](https://www.acmicpc.net/problem/16194)

[가장 긴 증가하는 부분 수열](https://www.acmicpc.net/problem/11053)

[가장 긴 증가하는 부분 수열 4](https://www.acmicpc.net/problem/14002)

[연속합](https://www.acmicpc.net/problem/1912)

[제곱수의 합](https://www.acmicpc.net/problem/1699)

[합분해](https://www.acmicpc.net/problem/2225)

[스티커](https://www.acmicpc.net/problem/9465)

[가장 큰 증가 부분 수열](https://www.acmicpc.net/problem/11055)

[가장 긴 감소하는 부분 수열](https://www.acmicpc.net/problem/11722)

<br>

## 3. 2차원 배열 사용하기 (dp[i][j])
```javascript
// example
if (j === 0) {
  dp[i][j] = dp[i - 1][0] + dp[i - 2][1];
}
```
[1, 2, 3 더하기 5](https://www.acmicpc.net/problem/15990)

[쉬운 계단 수](https://www.acmicpc.net/problem/10844)

[RGB거리](https://www.acmicpc.net/problem/1149)

[오르막 수](https://www.acmicpc.net/problem/11057)