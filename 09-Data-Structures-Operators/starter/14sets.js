// set is just a collection of unique values
// new Set(iterable)
// It is similar to array, but there are some differences.
// 1 set only contains unique elements
// 2 order of elements in a set is irrelevant
const orderSet = new Set(['pizza', 'pizza', 'Risotto', 'Pasta']);
//Set(3) { 'pizza', 'Risotto', 'Pasta' }
console.log(orderSet);
//Set(5) { 'J', 'o', 'n', 'a', 's' }
console.log(new Set('Jonas'));
// unique meals to cook
console.log(orderSet.size);

// Similar to includes in array
//true
console.log(orderSet.has('pizza'));
//false
console.log(orderSet.has('Bread'));

// add new element
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');

// delete
orderSet.delete('Risotto');
console.log(orderSet);

// clear
//orderSet.clear();

// Retrieve
// it is not indexed like an array. So, we can't use indexing. Instead loop and retrieve
for (const order of orderSet) {
  console.log(order);
}

// Example
const staff = ['sde', 'dev', 'admin', 'it', 'sde', 'it'];
const staffUnique = new Set(staff);
// set to array conversion
const staffUniqueArray = [...staffUnique];
