const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
//64
console.log(arr.at(-1));
//11
console.log(arr.at(-2));

// at also works on string
console.log('jonas'.at(-1));
