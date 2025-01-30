const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// forEach methods
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// what if we need index as well
for (const [i, movement] of movements.entries()) {
  console.log(`Movement ${i + 1}`);
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// foreach not only passes the current element but also index and entire array we are looping
// order must be looked. 1st parameter will have curr element, second will be current index and third will be array
// in foreach continue and break won't work. If we need these functionalites then use for of loop above
movements.forEach(function (movement, index, array) {
  console.log(`Movement ${index + 1}`);
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
