let n = 12345;
let m = 5;
let sum = 0;
for (let i = m; i > 0; i--) {
    sum += Math.floor(n % 10);
    n /= 10;
}
console.log("Sum numbers = " + sum);