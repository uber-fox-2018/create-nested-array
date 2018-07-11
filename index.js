const createdNestedArr = (row, col) => {
  const abjad = 'abcefghijklmnopqrstuvwxyz'
  let mainBoard = []

  for (let i = 0; i < row; i++) {
    var isiBoard = []
    for (let j = 0; j < col; j++) {
      isiBoard.push(abjad.charAt(Math.floor(Math.random() * abjad.length)))
    }
    mainBoard.push(isiBoard)
  }
  console.log(mainBoard);
  
}
createdNestedArr(5, 3)
createdNestedArr(4, 2)