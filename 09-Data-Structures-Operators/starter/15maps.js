// Map is similar to objects. It stores data in key value format
// one diff bw object and maps is datatype of key in object is string but in case of map it can be of any type
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');
/*Map(3) {
    'name' => 'Classico Italiano',
    1 => 'Firenze Italy',
    2 => 'Mumabi India'
  }*/
//return map
console.log(rest.set(2, 'Mumabi India'));
// since rest.set() returns a map we can chain and set key value pairs in one go
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
// IF TIME IS BW OPEN AND CLOSE THEN TRUE, WE GET WE ARE OPENED AS WE MAPPED TRUE TO THIS STRING
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// TRUE
console.log(rest.has('categories'));
// delete key 2
rest.delete(2);
// rest.clear();

const arr = [1, 2];
// array [1,2] will be key for 'Test
rest.set(arr, 'Test');
// undefined bcz [1,2] is another array as we compare by ref
//console.log(rest.get([1,2]));
console.log(rest.get(arr));
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
