function createNestedArr(rows, cols) {
  const output = [];
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  for(let i = 0; i < rows; i++) {
    const alphaRandom = [];
    for(let j = 1; j <= cols; j++) {
      const indexAlphaRandom = Math.floor(Math.random() * alpha.length);
      alphaRandom.push(alpha.charAt(indexAlphaRandom));
    }
    output.push(alphaRandom);
  }

  return output;

}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));