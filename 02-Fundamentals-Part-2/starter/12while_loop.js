// while loop is similar to for loop however it is more versatile than for loop
// It can be used when we don't know how long our loop runs before hand
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice != 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
