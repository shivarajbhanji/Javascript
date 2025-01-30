const arr = ['a', 'b', 'c', 'd', 'e'];
// slice returns part of original array from start postion mentioned
// [c,d,e]
console.log(arr.slice(2));
// [c,d] end is not included
console.log(arr.slice(2, 4));
//[d,e] last 2 elements
console.log(arr.slice(-2));
// last element of array
console.log(arr.slice(-1));
// [b,c]
console.log(arr.slice(1, -2));
// we can use slice to create shallow copy of an array
//[a,b,c,d,e]
console.log(arr.slice());

// splice
// removes one or more elements from original array
// [a,b,c,d,e]=[a,b] all elements starting from 2 are deleted
//console.log(arr.splice(2));
// deletes last element
console.log(arr.splice(-1));
// deletes 2 element from index 1
// [a,b,c,d]=[a,d]
console.log(arr.splice(1, 2));

// REVERSE
// reverses the original array
const arr1 = ['d', 'c', 'b', 'a'];
arr1.reverse();
console.log(arr1);

// CONCAT
// doesn't mutate original array
const letters = arr.concat(arr1);
//[a,b,c,d,e,d,c,b,a]
console.log(letters);
// same as concat
console.log([...arr, ...arr1]);

//JOIN
console.log(letters.join('-'));
