let n = 11;
let Mersenn = [];

console.log("All numbers of Mersenn: ");
for (let i=1;  i <= n; i++) {
    Mersenn[i] = Math.pow(2,i) - 1;
    console.log(Mersenn[i]);
}

console.log("Only prime numbers: ");
for (let i=2;  i <= n; i++) {
    let count = 0;
    for (let j=2; j<=i; j++) {
        if (i%j) {continue;}
        count++;
    }
    if (count == 1) {
        Mersenn[i] = Math.pow(2,i) - 1;
        console.log(Mersenn[i]);
    }
}








