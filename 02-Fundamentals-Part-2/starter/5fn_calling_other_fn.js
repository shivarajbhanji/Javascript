function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces(oranges);
    const juice = `juice with ${applePieces} apple pieces and ${orangepieces} orange pieces`;
    return juice;
}
console.log(fruitProcessor(2, 3));