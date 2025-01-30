const firstName = "Jonas";
const job = "teacher";
const jonas = "I'm" + firstName + ", a " + job;

// We can achieve complex string which combines multiples variables easily using string template literal
const jonasNew = `I'm ${firstName}, a ${job}`;
console.log("string with\n\
    multiple\n\
    lines");
// using template literals
console.log(`string 
    with 
    multiple lines`)