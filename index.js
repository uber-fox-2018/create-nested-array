const randomizer = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let indexRandom = Math.floor(Math.random() * alphabet.length);
  return alphabet[indexRandom];
}

const createNestedArr = (rows, cols) => {

  let mainBoard = [];
  for (let i = 0; i < rows; i++){
    let row = [];
    for (let i = 0; i < cols; i++){
      let input = randomizer ();
      row.push(input);
    }
    mainBoard.push(row);
  }
  return mainBoard;
}


console.log(createNestedArr(4,8))