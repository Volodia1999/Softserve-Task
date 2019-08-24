let n = 13;
let m = 7;
let multiply = m * n;
let same_numbers = [];
for (let i = 1; i < multiply; i++) {
    if (i % m === 0 && i % n === 0) {
        same_numbers[i] = i;
        console.log(same_numbers[i])
    }
}
if (same_numbers == "") {
    console.log("No coincidence");
}