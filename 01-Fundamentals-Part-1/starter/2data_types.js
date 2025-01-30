let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "john");

// Js is Dynamically typed language, meaning we can easily decide the datatype at the runtime and can even change its type as well
let age = 20;
// number
console.log(typeof age);
age = "22";
// string
console.log(typeof age);

//undefined
let year;
// undefined
console.log(year);
// undefined
console.log(typeof year);

// This should ideally return null but it returns as object. This bug is never corrected due to legacy reasons
console.log(typeof null);
