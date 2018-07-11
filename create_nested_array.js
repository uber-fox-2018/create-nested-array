function createNestedArr(jumlahRow, jumlahCol) {
  let alph = 'acfbhijkdmgnoplqrsetuvwxyz'
  let result = [];
  let count = 1;
  for (let i = 0; i < jumlahRow; i++) {
    let container = [];
    for (let j = 0; j < jumlahCol; j++) {
      if (count % 4 === 0) {
        let temp = count;
        temp /= 3;
        container.push(alph[Math.floor(temp)]);
      }
      else if (count % 7 === 0){
        let temp = count;
        temp /= 4;
        container.push(alph[Math.ceil(temp)]);
      }
      else {
        let temp = count;
        temp /= 2;
        container.push(alph[Math.round(temp)]);
      }
      // container.push(count);
      count += 1;
    }
    result.push(container);
  }
  return result;
}

console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));
