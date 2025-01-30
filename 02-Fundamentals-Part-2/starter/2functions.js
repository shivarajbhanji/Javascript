// Functions is just like a piece of code which can be reused as any times as we want.

function logger() {
  console.log("hi there this is shivaraj");
}

// invoking/calling fn
logger();

// receives data, process and retur data as well
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(5, 2));
